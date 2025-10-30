import { useQuery } from '@tanstack/react-query';
import useApi from '../useApi';

const CONTACTS_KEY = ['contacts'];

// Top3 지역 조회: GET /contacts/top3
export function useTop3Regions() {
  const api = useApi();
  return useQuery({
    queryKey: [...CONTACTS_KEY, 'top3'],
    queryFn: () => api.get('/contacts/top3'),
    staleTime: 60 * 1000, // 1분
  });
}
