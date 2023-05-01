import Head from 'next/head';
import Link from 'next/link';

import { LINK_TERMS_CONDITIONS } from '@/routes/routes.config';
import { GetStaticProps, NextPage } from 'next';
import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';
import { useContext, useEffect } from 'react';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import { TABLE_HEADERS_SELECT } from '@/constants/services.const';
import { FaCheck, FaTimes } from 'react-icons/fa';

export interface SeleccionarServicioProps {
    data: QosqompostaService[];
}
const SeleccionarServicio: NextPage<SeleccionarServicioProps> = ({ data }) => {
    const {
        defaultSelectedService,
        mergedServicesContext,
        servicesContext,
        setServicesContext,
    } = useContext(QosqompostaServicesContext) as ContextState;

    useEffect(() => {
        if (data && setServicesContext) {
            setServicesContext(data);
        }
    }, [data, setServicesContext]);
    return (
        <>
            <Head>
                <title>Seleccione su Plan | Qosqomposta</title>
                <meta name="description" content="Planes Comnerciales de Qosqomposta" />
            </Head>
            {servicesContext && servicesContext.length > 1 && (
                <table>
                    {TABLE_HEADERS_SELECT.map(header => {
                        return (
                            <tr key={header.key}>
                                <th>{header.name}</th>

                                {servicesContext.map((service, index) => {
                                    const keyValue = service[header.key];

                                    if (typeof keyValue == 'boolean') {
                                        return (
                                            <td key={service._id + keyValue}>
                                                {keyValue ? <FaCheck /> : <FaTimes />}
                                            </td>
                                        );
                                    }
                                    if (keyValue) {
                                        return !Array.isArray(keyValue) ? (
                                            <td key={service._id + keyValue}>
                                                {keyValue}
                                            </td>
                                        ) : (
                                            <td key={service._id + index}>
                                                {keyValue.map(item => item)}
                                            </td>
                                        );
                                    } else {
                                        <td>{''}</td>;
                                    }
                                })}
                            </tr>
                        );
                    })}
                </table>
            )}
            <section className="m-auto my-12 text-center">
                <Link href={LINK_TERMS_CONDITIONS} className="underline text-greenQ  ">
                    Condiciones del Servicio Qosqomposta
                </Link>
            </section>
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

export default SeleccionarServicio;
