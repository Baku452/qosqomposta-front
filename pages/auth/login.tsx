import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Bienvenido de vuelta !</h1>
      <LoginForm />
      <div className="p-4">
        Ya tienes una cuenta?
        <Link href="/auth/login">
          <a className="ml-2">Inicia sesión</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
