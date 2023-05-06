import React from 'react';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';
import { NextPage } from 'next';

const RegisterPage: NextPage = () => {
    return (
        <>
            <div className="p-10 m-auto text-center bg-gray-100">
                <SignUpForm />
            </div>
        </>
    );
};

export default RegisterPage;
