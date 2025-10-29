import { useMutation, useQuery } from '@tanstack/react-query';
import useApi from '../useApi';

// 관리자 로그인 API 호출
export function useAdminLogin() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  return useMutation({
    mutationKey: ['adminLogin'],
    mutationFn: async (secretCode) => {
      // 서버가 Set-Cookie를 내려주어야 하며, 크로스사이트 수신을 위해 credentials가 반드시 필요
      return api.post('/api/auth', { secretCode }, { credentials: 'include' });
    },
    onSuccess: () => {
      // 쿠키 속성(SameSite/Domain/Secure)은 서버가 제어해야 함. 클라이언트에서 임의로 로컬 쿠키를 만들지 않음.
      console.log('✅ 관리자 로그인 성공');
    },
    onError: (error) => {
      console.error('❌ 관리자 로그인 실패:', {
        status: error?.status,
        message: error?.message,
        body: error?.body ?? error?.data,
      });
    },
  });
}

// 관리자 로그아웃 (쿠키 삭제)
export function useAdminLogout() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  return useMutation({
    mutationKey: ['adminLogout'],
    mutationFn: async () => {
      // 서버 세션/쿠키 무효화 (서버가 Set-Cookie로 세션 쿠키 삭제)
      return api.del('/api/auth', { credentials: 'include' });
    },
    onSettled: () => {
      // 혹시 남아있을 수 있는 클라이언트 표시용 쿠키 제거(무해하지만 정리)
      document.cookie = 'admin_authed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },
  });
}

// 관리자 세션 확인: 서버 보호 리소스에 가벼운 요청을 보내 세션/권한을 확인한다.
// 응답이 200이면 로그인 상태, 401/403이면 비로그인/권한없음으로 판단
export function useAdminSessionCheck(enabled = true) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  return useQuery({
    queryKey: ['admin', 'sessionCheck'],
    enabled,
    queryFn: async () => {
      // 가장 가벼운 보호 리소스를 호출. 없으면 소형 목록 1건만 조회
      return api.get('/stores', {
        query: { page: 0, size: 1 },
        credentials: 'include',
      });
    },
    retry: false,
  });
}
