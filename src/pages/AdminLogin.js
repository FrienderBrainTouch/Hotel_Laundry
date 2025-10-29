import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../components/Admin/Auth/Login';
import { useAdminLogin } from '../hooks/queries/useAdminAuth';

const AdminLoginPage = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  const loginMutation = useAdminLogin();

  useEffect(() => {
    // 이미 로그인된 상태인지 확인
    const adminCookie = document.cookie.split('; ').find((row) => row.startsWith('admin_authed='));

    if (adminCookie && adminCookie.split('=')[1] === '1') {
      // 이미 로그인된 상태면 관리자 페이지로 리다이렉트
      navigate('/admin/dashboard');
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

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
