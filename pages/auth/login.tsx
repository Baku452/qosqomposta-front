import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Bienvenido de vuelta !</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
