import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="max-w-6xl m-auto items-center flex flex-col">
        <h1>Bienvenido a Qosqomposta !</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
