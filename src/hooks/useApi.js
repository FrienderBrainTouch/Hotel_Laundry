import { useMemo } from 'react';

export default function useApi(baseUrl = process.env.REACT_APP_API_BASE_URL) {
  const request = useMemo(() => {
    return async function api(
      path,
      { method = 'GET', headers = {}, query, body, signal, credentials = 'omit' } = {}
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
      const init = {
        method,
        headers: {
          ...(isJsonBody ? { 'Content-Type': 'application/json' } : {}),
          ...headers,
        },
        body: isJsonBody ? JSON.stringify(body) : body,
        signal,
        credentials,
      };

      const response = await fetch(url.toString(), init);
      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const error = new Error('API_ERROR');
        error.status = response.status;
        error.data = data;
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
