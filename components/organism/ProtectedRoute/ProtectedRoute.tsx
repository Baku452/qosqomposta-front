import { State } from '@/reducers/rootReducer';
import { LOGIN_PATH } from '@/routes/routes.config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

export interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const userInfo = useSelector((state: State) => state.appUser.displayName);
  const userToken = useMemo(() => {
    return Cookies.get('user_token');
  }, []);

  // const fetchUserInfo = async () => {
  //   const tokenresult = await userCredentials.user.getIdTokenResult();
  //       dispatch(setUserApp({ ...tokenresult.claims }));
  // }
  useEffect(() => {
    if (!userToken) {
      router.push(LOGIN_PATH);
    }
  }, [router, userToken]);

  return <>{children}</>;
};

export default ProtectedRoute;
