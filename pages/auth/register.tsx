import React from 'react';
import { SignUpForm } from '@/components/molecules/signUpForm';

const RegisterPage = () => {
    return (
        <>
            <div className="p-10  m-auto">
                <h1>Bienvenido al Movimiento Compostero</h1>
                <SignUpForm />
            </div>
        </>
    );
};

export default RegisterPage;
