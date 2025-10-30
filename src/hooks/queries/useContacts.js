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

// 관리자용 문의 목록 조회: GET /contacts/admin
// params: { contactType=GENERAL, region?, contactStatus?, keyword?, page=0, size=10, sort? }
export function useAdminContactsList(params = {}) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  const buildQuery = (p = {}) => {
    const q = {
      contactType: p?.contactType ?? 'GENERAL', // GENERAL | LOW_CAPITAL
      page: p?.page ?? 0,
      size: p?.size ?? 10,
    };
    if (p?.region) q.region = p.region;
    if (p?.contactStatus) q.contactStatus = p.contactStatus; // UNCHECKED | COMPLETE | DELETED
    if (p?.keyword) q.keyword = p.keyword;
    if (p?.sort) q.sort = p.sort; // e.g., ['createdAt', 'desc']
    return q;
  };

  return useQuery({
    queryKey: [...CONTACTS_KEY, 'admin', buildQuery(params)],
    queryFn: () =>
      api.get('/contacts/admin', {
        query: buildQuery(params),
      }),
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });
}
