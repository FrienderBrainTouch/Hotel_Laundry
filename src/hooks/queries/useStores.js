import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useApi from '../useApi';

const STORES_KEY = ['stores'];

export function useStoresList(params) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  return useQuery({
    queryKey: [...STORES_KEY, params],
    queryFn: () => api.get('/stores', { query: params }),
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
}

export function useStoreDetail(id) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  return useQuery({
    queryKey: [...STORES_KEY, id],
    queryFn: () => api.get(`/stores/${id}`),
    enabled: !!id,
  });
}

export function useCreateStore() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => api.post('/stores', payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: STORES_KEY });
    },
  });
}

export function useUpdateStore(id) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => api.put(`/stores/${id}`, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: STORES_KEY });
      qc.invalidateQueries({ queryKey: [...STORES_KEY, id] });
    },
  });
}

export function useDeleteStore() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.del(`/stores/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: STORES_KEY });
    },
  });
}
