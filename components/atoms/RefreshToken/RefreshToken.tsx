import Cookies from 'js-cookie';
import { createToast } from '../Toast/ToastApp';
import { useCallback, useEffect, useState } from 'react';
import {
  TOKEN_EXPIRED,
  TOKEN_EXPIRE_TRESHOLD,
  TOKEN_GOING_TO_EXPIRE,
} from '@/main.config';
import { useRouter } from 'next/router';
import { auth } from '@/utils/firebase';

const RefreshToken: React.FC = () => {
  const [refreshingToken, setRefreshingToken] = useState(false);
  const userToken = Cookies.get('user_token');
  const router = useRouter();
  const tokenParsed = useCallback(
    (token: string) => {
      if (!token) {
        return;
      }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    },
    [userToken],
  );

  const refreshToken = async () => {
    try {
      setRefreshingToken(true);
      const result = await auth.currentUser?.getIdTokenResult(true);
      if (result) {
        Cookies.set('user_token', result.token, {
          expires: new Date(result.expirationTime),
        });
      }
      setRefreshingToken(false);
    } catch (error) {
      createToast({
        toastType: 'error',
        message: 'Error al actualizar el token de sesion',
        toastId: 'tokenExpireError',
        toastPosition: 'bottom-right',
        autoClose: false,
      });
      router.push('/');
    }
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (userToken) {
        const decodedToken = tokenParsed(userToken);
        const currentTime = Math.floor(Date.now() / 1000);
        const remainingTime = decodedToken.exp - currentTime;

        if (remainingTime <= 0) {
          // Token has expired
          clearInterval(intervalId);
          createToast({
            toastType: 'error',
            message: TOKEN_EXPIRED,
            toastId: 'tokenExpireWarn',
            toastPosition: 'bottom-right',
            autoClose: false,
          });
        } else if (remainingTime < TOKEN_EXPIRE_TRESHOLD) {
          createToast({
            toastType: 'warning',
            message: TOKEN_GOING_TO_EXPIRE,
            toastId: 'tokenExpireWarn',
            toastPosition: 'bottom-right',
            autoClose: false,
            primaryButton: {
              label: 'Actualizar',
              handleClick: refreshToken,
              loading: refreshingToken,
            },
          });
        }
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return null;
};

export default RefreshToken;
