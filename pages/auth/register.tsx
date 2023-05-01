import React, { useContext, useEffect } from 'react';
import Image from 'next/legacy/image';
import { LOGO_COLOR } from '@/public/data/homeImages';
import SignUpForm from '@/components/molecules/SignUpForm/SignUpForm';
import { GetStaticProps, NextPage } from 'next';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';

export interface Props {
    data: QosqompostaService[];
}
const RegisterPage: NextPage<Props> = ({ data }) => {
    const { setServicesContext } = useContext(QosqompostaServicesContext) as ContextState;

    useEffect(() => {
        if (data && setServicesContext) {
            setServicesContext(data);
        }
    }, [data, setServicesContext]);
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

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(
        `${process.env.QOSQOMPOSTA_BACKEND_URL}/qosqomposta-service`,
    );
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};

export default RegisterPage;
