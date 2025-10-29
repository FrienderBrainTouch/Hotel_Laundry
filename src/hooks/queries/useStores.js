import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useApi from '../useApi';

const STORES_KEY = ['stores'];

// 유저용 매장 목록 조회: GET /stores
// params: { status, keyword, region, page, size, sort }
export function useStoresList(params) {
  const api = useApi();
  return useQuery({
    queryKey: [...STORES_KEY, params],
    queryFn: () =>
      api.get('/stores', {
        query: {
          status: params?.status, // WAITING | RECRUITING | CLOSED | COMPLETE | undefined(ALL)
          page: params?.page ?? 0,
          size: params?.size ?? 10,
        },
      }),
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
}

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

export function useCreateStore() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      console.log('🚀 Creating store with FormData...');
      return api.post('/admin/stores', formData, { credentials: 'include' });
    },
    onSuccess: () => {
      console.log('✅ Store created successfully');
      qc.invalidateQueries({ queryKey: STORES_KEY });
    },
    onError: (error) => {
      console.error('❌ Store creation failed:', error);
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
          sort: 'modifiedAt,desc', // 최신 수정일 기준 내림차순
        },
      }),
    staleTime: 60 * 1000, // 1분
  });
}

// 관리자용 매장 목록 조회: GET /stores
export function useAdminStoresList(params) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  // console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
  //console.log('Current cookies:', document.cookie);

  return useQuery({
    queryKey: [...STORES_KEY, 'admin', params],
    queryFn: () => {
      console.log('Making request to /stores with credentials: include');
      return api.get('/stores', {
        query: {
          page: params?.page ?? 0,
          size: params?.size ?? 10,
          sort: params?.sort,
        },
        credentials: 'include', // 명시적으로 쿠키 포함
      });
    },
    staleTime: 60 * 1000, // 1분
    keepPreviousData: true,
  });
}
