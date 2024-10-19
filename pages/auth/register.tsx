/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';
import { GetStaticProps, NextPage } from 'next';
import 'react-phone-number-input/style.css';
import { extractFields } from '@/utils/utils';

export interface RegisterPageProps {
  data: any;
}
const RegisterPage: NextPage<RegisterPageProps> = ({ data }) => {
  return (
    <div className="p-10 m-auto text-center">
      <SignUpForm />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CITIES_API}`);
  const data = await response.json();

  const formattedData = extractFields(data.records);
  return {
    props: {
      data: formattedData,
    },
  };
};

export default RegisterPage;
