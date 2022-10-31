import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';

const Login: React.FC = () => {
  return (
    <>
      <h1>Bienvenido a Qosqomposta !</h1>
      <h2>Estás a unos pasos para ser parte del movimiento qompostero</h2>
      <LoginForm />
    </>
  );
};

export default Login;
