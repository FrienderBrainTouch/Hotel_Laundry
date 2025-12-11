import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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

// 관리자용 일반 문의 목록 조회: GET /contacts/admin/general
// params: { contactStatus?, keyword?, page=0, size=10 }
export function useAdminGeneralContacts(params = {}) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  const buildQuery = (p = {}) => {
    const q = {
      page: p?.page ?? 0,
      size: p?.size ?? 10,
    };
    if (p?.contactStatus) q.contactStatus = p.contactStatus; // UNCHECKED | COMPLETE | DELETED
    if (p?.keyword) q.keyword = p.keyword;
    return q;
  };

  return useQuery({
    queryKey: [...CONTACTS_KEY, 'admin', 'general', buildQuery(params)],
    queryFn: () =>
      api.get('/contacts/admin/general', {
        query: buildQuery(params),
      }),
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });
}

// 관리자용 소규모 창업 문의 목록 조회: GET /contacts/admin/low-capital
// params: { region?, contactStatus?, keyword?, page=0, size=10 }
export function useAdminLowCapitalContacts(params = {}) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  const buildQuery = (p = {}) => {
    const q = {
      page: p?.page ?? 0,
      size: p?.size ?? 10,
    };
    if (p?.region) q.region = p.region;
    if (p?.contactStatus) q.contactStatus = p.contactStatus; // UNCHECKED | COMPLETE | DELETED
    if (p?.keyword) q.keyword = p.keyword;
    return q;
  };

  return useQuery({
    queryKey: [...CONTACTS_KEY, 'admin', 'low-capital', buildQuery(params)],
    queryFn: () =>
      api.get('/contacts/admin/low-capital', {
        query: buildQuery(params),
      }),
    keepPreviousData: true,
    staleTime: 60 * 1000,
  });
}

// [DEPRECATED] 관리자용 문의 목록 조회 (하위 호환성을 위해 유지)
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

// 관리자용 문의 상세 조회: GET /contacts/admin/detail/{contactId}
export function useAdminContactDetail(contactId) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  return useQuery({
    queryKey: [...CONTACTS_KEY, 'admin', 'detail', contactId],
    queryFn: () => api.get(`/contacts/admin/detail/${contactId}`),
    enabled: !!contactId,
    staleTime: 60 * 1000,
  });
}

<<<<<<< Updated upstream
// 관리자용 문의 상태 변경: POST /contacts/admin/update/{contactId}?status={status}
export function useUpdateContactStatus() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateContactStatus'],
    mutationFn: async ({ contactId, status }) => {
      return api.post(`/contacts/admin/update/${contactId}`, null, {
        query: { status },
      });
    },
    onSuccess: (_, variables) => {
      // 상세 조회 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: [...CONTACTS_KEY, 'admin', 'detail', variables.contactId],
      });
      // 목록 쿼리도 무효화하여 목록에 반영
      queryClient.invalidateQueries({
        queryKey: [...CONTACTS_KEY, 'admin'],
      });
      console.log('✅ 문의 상태 업데이트 성공');
    },
    onError: (error) => {
      console.error('❌ 문의 상태 업데이트 실패:', {
        status: error?.status,
        message: error?.message,
=======
// 문의 상태 변경: POST /contacts/admin/update/{contactId}?status=UNCHECKED
export function useUpdateContactStatus(contactId) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ['updateContactStatus', contactId],
    mutationFn: (status) =>
      api.post(`/contacts/admin/update/${contactId}`, null, {
        query: { status },
      }),
    onSuccess: () => {
      console.log('✅ Contact status updated successfully');
      // 목록 및 상세 캐시 무효화
      qc.invalidateQueries({ queryKey: [...CONTACTS_KEY, 'admin'] });
      qc.invalidateQueries({ queryKey: [...CONTACTS_KEY, 'admin', 'detail', contactId] });
    },
    onError: (error) => {
      console.error('❌ Contact status update failed:', {
        name: error?.name,
        message: error?.message,
        status: error?.status,
        url: error?.url,
>>>>>>> Stashed changes
        body: error?.body ?? error?.data,
      });
    },
  });
}
