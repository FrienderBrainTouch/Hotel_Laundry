import { useMutation } from '@tanstack/react-query';
import useApi from '../useApi';

// 관리자 로그인 API 호출
export function useAdminLogin() {
  const api = useApi();

  return useMutation({
    mutationFn: async (secretCode) => {
      const response = await api.post('/api/auth', { secretCode });
      return response;
    },
    onSuccess: (data) => {
      // 로그인 성공 시 쿠키 설정 (7일 만료)
      const expires = new Date();
      expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
      document.cookie = `admin_authed=1; expires=${expires.toUTCString()}; path=/`;
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
}

// 관리자 로그아웃 (쿠키 삭제)
export function useAdminLogout() {
  return {
    logout: () => {
      document.cookie = 'admin_authed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },
  };
}
