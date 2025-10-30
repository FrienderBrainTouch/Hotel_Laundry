import { useMemo } from 'react';

export default function useApi(baseUrl = process.env.REACT_APP_API_BASE_URL) {
  const request = useMemo(() => {
    return async function api(
      path,
      { method = 'GET', headers = {}, query, body, signal } = {}
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

      // JWT 토큰을 로컬스토리지에서 가져오기
      const accessToken = localStorage.getItem('accessToken');

      const init = {
        method,
        headers: {
          ...(isJsonBody ? { 'Content-Type': 'application/json' } : {}),
          ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {}),
          'X-Requested-With': 'XMLHttpRequest',
          ...headers,
        },
        body: isJsonBody ? JSON.stringify(body) : body,
        signal,
      };

      console.log('🚀 API Request:', {
        url: url.toString(),
        method,
        headers: init.headers,
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
