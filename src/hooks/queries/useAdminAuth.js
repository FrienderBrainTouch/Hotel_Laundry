import { useMutation, useQuery } from '@tanstack/react-query';
import useApi from '../useApi';

// 관리자 로그인 API 호출
export function useAdminLogin() {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);

  return useMutation({
    mutationKey: ['adminLogin'],
    mutationFn: async (secretCode) => {
      // JWT 토큰을 ResponseEntity에서 받음
      return api.post('/auth', { secretCode });
    },
    onSuccess: (data) => {
      // accessToken을 로컬스토리지에 저장
      if (data?.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        console.log('✅ 관리자 로그인 성공 - JWT 토큰 저장됨');
      } else {
        console.error('❌ accessToken이 응답에 없습니다:', data);
      }
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

// 관리자 로그아웃 (JWT 토큰 제거)
export function useAdminLogout() {
  return useMutation({
    mutationKey: ['adminLogout'],
    mutationFn: async () => {
      // 서버 호출 없이 클라이언트에서 토큰만 제거
      localStorage.removeItem('accessToken');
      console.log('✅ 로그아웃 - JWT 토큰 제거됨');
      return { success: true };
    },
  });
}

// 관리자 세션 확인: JWT 토큰의 유효성을 확인
// 응답이 200이면 로그인 상태, 401/403이면 비로그인/권한없음으로 판단
export function useAdminSessionCheck(enabled = true) {
  const api = useApi(process.env.REACT_APP_API_BASE_URL);
  return useQuery({
    queryKey: ['admin', 'sessionCheck'],
    enabled: enabled && !!localStorage.getItem('accessToken'), // JWT가 있을 때만 체크
    queryFn: async () => {
      // 가장 가벼운 보호 리소스를 호출하여 JWT 유효성 확인
      return api.get('/stores', {
        query: { page: 0, size: 1 },
      });
    },
    retry: false,
  });
}
