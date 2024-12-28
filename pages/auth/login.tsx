import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="m-auto flex max-w-6xl flex-col items-center">
        <h1>Bienvenido a Qosqomposta !</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
