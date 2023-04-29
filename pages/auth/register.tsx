import React from 'react';
import Image from 'next/legacy/image';
import { LOGO_COLOR } from '@/public/data/homeImages';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';

const RegisterPage: React.FC = () => {
    return (
        <>
            <div className="p-10 m-auto text-center bg-gray-100">
                <h1 className="mt-10">Creación de Nuevo Usuario</h1>
                <Image src={LOGO_COLOR} width={300} height={300} alt="logo Color" />
                <SignUpForm />
            </div>
        </>
    );
};

export default RegisterPage;
