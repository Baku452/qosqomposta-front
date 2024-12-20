import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FORGOT_PASSWORD, SELECT_SERVICE_PATH } from '@/routes/routes.config';
import Link from 'next/link';
import Cookies from 'js-cookie';
import {
  DEFAULT_ERROR_MESSAGE,
  firebaseAuthErrorCodes,
} from '@/constants/firebaseAuthErrorConst';
import { useDispatch } from 'react-redux';
import { setUserApp } from '@/actions/user.app.actions';
import Spinner from '@/components/atoms/Spinner/Spinner';
import { FaEye } from 'react-icons/fa';
import styles from './LoginForm.module.scss';

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [errorAuth, setErrorAuth] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    mode: 'onBlur',
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .required('El correo electrónico es necesario')
          .email('Correo electrónico inválido'),
        password: yup.string().required('La contraseña es necesaria'),
      }),
    ),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const { ref, ...restPassword } = register('password');
  const passwordValue = watch('password');
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleLogin = async (data: LoginFormFields) => {
    setIsLogin(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const tokenresult = await userCredentials.user.getIdTokenResult();
      dispatch(setUserApp({ ...tokenresult.claims, ...userCredentials.user }));
      Cookies.set('user_token', tokenresult.token, {
        expires: new Date(tokenresult.expirationTime),
      });
      setIsLogin(false);
      router.push('/dashboard');
    } catch (error) {
      const firebaseError = firebaseAuthErrorCodes.find(
        errorFirebase => errorFirebase.code == error.code,
      );
      setErrorAuth(firebaseError ? firebaseError.message : DEFAULT_ERROR_MESSAGE);
    } finally {
      setIsLogin(false);
    }
  };

  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(value => !value);
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };
  return (
    <div className="mb-20 min-w-[500px] rounded-3xl p-10 shadow-xl">
      <form
        className="relative m-auto mb-5 block w-3/4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="py-5 text-center font-paragraph text-2xl">Ingrese sus datos</h2>
        <div className="mb-5">
          <input placeholder="Correo Electrónico" type="email" {...register('email')} />
          {errors.email && <span className="text-error">{errors.email.message}</span>}
        </div>
        <div className="mb-5 text-right">
          <div className="relative flex items-center">
            <input
              className="!relative !block"
              placeholder="Contraseña"
              type={showPassword ? 'text' : 'password'}
              {...restPassword}
              ref={e => {
                ref(e);
                passwordInputRef.current = e;
              }}
            />
            <button
              tabIndex={-1}
              disabled={!passwordValue}
              className={styles.showPasswordIcon}
              onClick={handleShowPassword}
            >
              <FaEye />
            </button>
          </div>
          {errors.password && (
            <div className="text-left">
              <span className="text-error">{errors.password.message}</span>
            </div>
          )}

          {errorAuth && <span className="text-error">{errorAuth}</span>}
          <a className="relative block pt-3 text-yellowQ-500" href={FORGOT_PASSWORD}>
            Olvide mi contraseña
          </a>
        </div>
        <button className="btn btn-primary block !w-full" type="submit">
          {isLogin ? <Spinner size="xs" /> : <>Ingresar</>}
        </button>
      </form>
      <div className="text-center">
        <p>¿No tiene una cuenta?</p>
        <Link href={SELECT_SERVICE_PATH} className="font-bold text-yellowQ-500">
          Elija un Servicio Q
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
