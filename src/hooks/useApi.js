import { useMemo } from 'react';

export default function useApi(baseUrl = process.env.REACT_APP_API_BASE_URL) {
  const request = useMemo(() => {
    return async function api(
      path,
      { method = 'GET', headers = {}, query, body, signal, credentials = 'include' } = {}
    ) {
      const url = new URL((baseUrl || '') + path, window.location.origin);
      if (query && typeof query === 'object') {
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const isJsonBody = body && !(body instanceof FormData);

      // CSRF 토큰(예: Spring Security의 XSRF-TOKEN)을 쿠키에서 읽어 헤더에 추가
      const parsedCookies = document.cookie
        .split(';')
        .map((c) => c.trim())
        .filter(Boolean)
        .reduce((acc, c) => {
          const idx = c.indexOf('=');
          if (idx > -1) {
            const k = c.slice(0, idx);
            const v = c.slice(idx + 1);
            acc[k] = decodeURIComponent(v);
          }
          return acc;
        }, {});
      const xsrfToken = parsedCookies['XSRF-TOKEN'] || parsedCookies['CSRF-TOKEN'];

      const init = {
        method,
        headers: {
          ...(isJsonBody ? { 'Content-Type': 'application/json' } : {}),
          ...(xsrfToken ? { 'X-XSRF-TOKEN': xsrfToken } : {}),
          'X-Requested-With': 'XMLHttpRequest',
          ...headers,
        },
        body: isJsonBody ? JSON.stringify(body) : body,
        signal,
        credentials,
      };

      console.log('🚀 API Request:', {
        url: url.toString(),
        method,
        headers: init.headers,
        credentials: init.credentials,
        body: init.body instanceof FormData ? 'FormData' : init.body,
      });

      const response = await fetch(url.toString(), init);
      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? await response.json()
        : await response.text();

      console.log('📡 API Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        data: data,
      });

      if (!response.ok) {
        console.error('❌ API Error:', {
          url: url.toString(),
          method,
          status: response.status,
          statusText: response.statusText,
          data: data,
        });
        const error = new Error(`HTTP ${response.status} ${response.statusText}`);
        error.status = response.status;
        error.url = url.toString();
        error.body = typeof data === 'string' ? data : JSON.stringify(data);
        throw error;
      }

      return data;
    };
  }, [baseUrl]);

  return {
    get: (path, opts) => request(path, { ...opts, method: 'GET' }),
    post: (path, body, opts) => request(path, { ...opts, method: 'POST', body }),
    put: (path, body, opts) => request(path, { ...opts, method: 'PUT', body }),
    patch: (path, body, opts) => request(path, { ...opts, method: 'PATCH', body }),
    del: (path, opts) => request(path, { ...opts, method: 'DELETE' }),
  };
}
