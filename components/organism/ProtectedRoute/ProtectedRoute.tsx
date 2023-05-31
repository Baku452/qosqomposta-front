import { LOGIN_PATH } from '@/routes/routes.config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';

export interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const userToken = useMemo(() => {
    return Cookies.get('user_token');
  }, []);

  useEffect(() => {
    if (!userToken) {
      router.push(LOGIN_PATH);
    }
  }, [router, userToken]);

  return <>{children}</>;
};

export default ProtectedRoute;
