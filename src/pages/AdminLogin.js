import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../components/Admin/Auth/Login';
import { useAdminLogin, useAdminSessionCheck } from '../hooks/queries/useAdminAuth';

const AdminLoginPage = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  const loginMutation = useAdminLogin();

  // 토큰이 있으면 세션 체크
  const hasToken = !!localStorage.getItem('accessToken');
  const { isLoading: isSessionChecking, isSuccess } = useAdminSessionCheck(hasToken);

  useEffect(() => {
    if (!hasToken) {
      // 토큰이 없으면 로그인 화면 표시
      setIsChecking(false);
      return;
    }
    
    if (isSessionChecking) return;
    if (isSuccess) {
      // 이미 로그인되어 있으면 대시보드로
      navigate('/admin/dashboard');
    } else {
      // 토큰은 있지만 유효하지 않으면 제거하고 로그인 화면
      localStorage.removeItem('accessToken');
      setIsChecking(false);
    }
  }, [hasToken, isSessionChecking, isSuccess, navigate]);

  const handleLogin = async (secretCode) => {
    try {
      await loginMutation.mutateAsync(secretCode);
      navigate('/admin/dashboard');
    } catch (error) {
      alert('로그인에 실패했습니다. 비밀번호를 확인해주세요.');
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">확인 중...</p>
        </div>
      </div>
    );
  }

  return <AdminLogin onSubmit={handleLogin} isLoading={loginMutation.isPending} />;
};

export default AdminLoginPage;
