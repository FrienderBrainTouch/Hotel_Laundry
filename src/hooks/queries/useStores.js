import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useApi from '../useApi';

const STORES_KEY = ['stores'];

// 유저용 매장 목록 조회: GET /stores
// params: { status, keyword, region, page, size, sort }
export function useStoresList(params) {
  const api = useApi();
  const buildQuery = (p = {}) => {
    const q = {
      page: p?.page ?? 0,
      size: p?.size ?? 10,
    };
    // USER 조회: status는 RECRUITING | CLOSED 만 허용, 그 외/없음은 미전송
    if (p?.status && (p.status === 'RECRUITING' || p.status === 'CLOSED')) {
      q.status = p.status;
    }
    if (p?.region) q.region = p.region;
    if (p?.keyword) q.keyword = p.keyword;
    if (p?.sort) q.sort = p.sort;
    return q;
  };
  return useQuery({
    queryKey: [...STORES_KEY, buildQuery(params)],
    queryFn: () =>
      api.get('/stores', {
        query: buildQuery(params),
      }),
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
}

// 매장 상세 조회: GET /stores/{id}
export function useStoreDetail(id) {
  const api = useApi();
  return useQuery({
    queryKey: [...STORES_KEY, id],
    queryFn: () => api.get(`/stores/${id}`),
    enabled: !!id,
    select: (res) => {
      if (!res) return res;
      const {
        storeId,
        images = [],
        address = {},
        basicInfo = {},
        details = {},
        description = {},
      } = res;

      return {
        // 원본
        raw: res,
        // 플랫/편의 필드
        storeId,
        images,
        address: address.address || '',
        detailAddress: address.detailAddress || '',
        storeName: basicInfo.storeName || '',
        status: basicInfo.status || '',
        targetRecruits: basicInfo.targetRecruits ?? null,
        targetOpeningDate: basicInfo.targetOpeningDate || '',
        areaSqm: basicInfo.areaSqm ?? null,
        washingMachines: basicInfo.washingMachines ?? null,
        dryers: basicInfo.dryers ?? null,
        operatingHours: basicInfo.operatingHours || '',
        areaType: basicInfo.areaType || '',
        detailsLocation: details.detailsLocation || '',
        detailsInterior: details.detailsInterior || '',
        detailsFloor: details.detailsFloor || '',
        detailsRent: details.detailsRent || '',
        detailsDeposit: details.detailsDeposit || '',
        detailsStartupCost: details.detailsStartupCost || '',
        detailsParking: details.detailsParking || '',
        detailsSize: details.detailsSize || '',
        householdCountInRadius: description.householdCountInRadius || '',
        populationByAgeGroup: description.populationByAgeGroup || '',
        competitorStores: description.competitorStores || '',
        locationAnalysis: description.locationAnalysis || '',
      };
    },
  });
}

// 매장 생성: POST /admin/stores
export function useCreateStore() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ['createStore'],
    mutationFn: async (formData) => {
      console.log('🚀 Creating store with FormData...');
      // JWT 토큰이 Authorization 헤더에 자동으로 포함됨
      return api.post('/admin/stores', formData);
    },
    onSuccess: () => {
      console.log('✅ Store created successfully');
      console.log('✅ Store created successfully');
      qc.invalidateQueries({ queryKey: STORES_KEY });
    },
    onError: (error) => {
      console.error('❌ Store creation failed:', {
        name: error?.name,
        message: error?.message,
        status: error?.status,
        url: error?.url,
        body: error?.body ?? error?.data,
      });
    },
  });
}

// 매장 수정: PATCH /admin/stores/{id}
export function useUpdateStore(id) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ['updateStore', id],
    mutationFn: (formData) => api.patch(`/admin/stores/${id}`, formData),
    onSuccess: () => {
      console.log('✅ Store updated successfully');
      qc.invalidateQueries({ queryKey: STORES_KEY });
      qc.invalidateQueries({ queryKey: [...STORES_KEY, id] });
    },
    onError: (error) => {
      console.error('❌ Store update failed:', {
        name: error?.name,
        message: error?.message,
        status: error?.status,
        url: error?.url,
        body: error?.body ?? error?.data,
      });
    },
  });
}

// 매장 삭제: DELETE /admin/stores/{id}
export function useDeleteStore() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();
  return useMutation({
    mutationKey: ['deleteStore'],
    mutationFn: (id) => api.del(`/admin/stores/${id}`),
    onSuccess: () => {
      console.log('✅ Store deleted successfully');
      qc.invalidateQueries({ queryKey: STORES_KEY });
    },
    onError: (error) => {
      console.error('❌ Store deletion failed:', {
        name: error?.name,
        message: error?.message,
        status: error?.status,
        url: error?.url,
        body: error?.body ?? error?.data,
      });
    },
  });
}

// 매장 수 조회: GET /stores/counts
export function useStoreCounts() {
  const api = useApi();
  return useQuery({
    queryKey: [...STORES_KEY, 'counts'],
    queryFn: () => api.get('/stores/counts'),
    staleTime: 60 * 1000, // 1분
  });
}

// 최근 업데이트된 매장 조회: GET /stores (modifiedAt 기준 정렬)
export function useRecentStores(limit = 5) {
  const api = useApi();
  return useQuery({
    queryKey: [...STORES_KEY, 'recent', limit],
    queryFn: () =>
      api.get('/stores', {
        query: {
          page: 0,
          size: limit,
          // 서버 요구사항: status=ALL 포함, sort는 [modifiedAt, desc] 형태
          status: 'ALL',
          sort: ['modifiedAt', 'desc'],
        },
      }),
    staleTime: 60 * 1000, // 1분
  });
}

// 관리자용 매장 목록 조회: GET /stores
export function useAdminStoresList(params) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  const buildAdminQuery = (p = {}) => {
    const q = {
      page: p?.page ?? 0,
      size: p?.size ?? 10,
    };
    // ADMIN 조회: 기본값 ALL, 반드시 서버로 전송 (status=ALL 포함)
    q.status = p?.status ?? 'ALL'; // WAITING | RECRUITING | CLOSED | COMPLETE | ALL
    if (p?.region) q.region = p.region;
    if (p?.keyword) q.keyword = p.keyword;
    if (p?.sort) q.sort = p.sort;
    return q;
  };

  return useQuery({
    queryKey: [...STORES_KEY, 'admin', buildAdminQuery(params)],
    queryFn: () => {
      console.log('Making request to /stores with JWT Authorization header');
      // JWT 토큰이 Authorization 헤더에 자동으로 포함됨
      return api.get('/stores', {
        query: buildAdminQuery(params),
      });
    },
    staleTime: 60 * 1000, // 1분
    keepPreviousData: true,
  });
}
