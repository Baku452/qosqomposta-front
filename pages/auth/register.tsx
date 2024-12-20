/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';
import { NextPage } from 'next';
import 'react-phone-number-input/style.css';

export interface RegisterPageProps {
  data: any;
}
const RegisterPage: NextPage<RegisterPageProps> = () => {
  return (
    <div className="m-auto p-10 text-center">
      <SignUpForm />
    </div>
  );
};

export default RegisterPage;
