import Head from 'next/head';
import Link from 'next/link';

import { LINK_TERMS_CONDITIONS } from '@/routes/routes.config';
import { GetStaticProps, NextPage } from 'next';
import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';
import { useContext, useEffect, useState } from 'react';
import { QosqompostaService, QosqompostaServiceMerged } from '@/types/serviceQosqomposta';
import { TABLE_HEADERS_SELECT } from '@/constants/services.const';
import { FaCheck, FaTimes } from 'react-icons/fa';

//Styles
import styles from './seleccionar.module.scss';
export interface SeleccionarServicioProps {
    data: QosqompostaService[];
}
const SeleccionarServicio: NextPage<SeleccionarServicioProps> = ({ data }) => {
    const { defaultSelectedService, mergedServicesContext, setServicesContext } =
        useContext(QosqompostaServicesContext) as ContextState;

    const [activeService, setActiveService] = useState<
        QosqompostaServiceMerged | undefined
    >(defaultSelectedService);
    useEffect(() => {
        if (data && setServicesContext) {
            setServicesContext(data);
        }
    }, [data, setServicesContext]);

    useEffect(() => {
        if (defaultSelectedService) {
            setActiveService(defaultSelectedService);
        }
    }, [defaultSelectedService]);

    return (
        <>
            <Head>
                <title>Seleccione su Plan | Qosqomposta</title>
                <meta name="description" content="Planes Comnerciales de Qosqomposta" />
            </Head>
            <div className={`p-5 ${styles.backgroundPage}`}>
                <h2 className="text-4xl text-center pt-10">Elige tu Plan</h2>
                <p className="text-center py-5">Puedes cancelar en cualquier momento.</p>
                <div className="flex m-auto w-full justify-center gap-4 py-10">
                    {mergedServicesContext?.map(service => (
                        <button
                            onClick={() => setActiveService(service)}
                            className={`${
                                activeService?._id == service._id ? '!bg-yellowQ' : ''
                            } bg-white rounded-lg px-5 py-2 border-2 w-60`}
                            key={service._id}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>

                {activeService && activeService.modality.length > 1 && (
                    <table className={styles.tableServices}>
                        <tr>
                            <th>{'Descripcion del Servicio'}</th>
                            <td colSpan={3}>{activeService?.summary}</td>
                        </tr>
                        {TABLE_HEADERS_SELECT.map(header => {
                            return (
                                <tr key={header.key}>
                                    <th>{header.name}</th>

                                    {activeService.modality.map((service, index) => {
                                        const keyValue = service[header.key];

                                        if (header.key === '_id') {
                                            return (
                                                <td key={service._id}>
                                                    <button className="bg-yellowQ rounded-lg py-3 px-4">
                                                        Inscribirse
                                                    </button>
                                                </td>
                                            );
                                        }
                                        if (header.key === 'price') {
                                            return (
                                                <td key={service._id} className="!p-0">
                                                    {service.price > 0
                                                        ? ` S/. 
                                                    ${service.price} / mes`
                                                        : 'Gratis'}
                                                </td>
                                            );
                                        }
                                        if (typeof keyValue == 'boolean') {
                                            return (
                                                <td key={service.id + keyValue}>
                                                    {keyValue ? <FaCheck /> : <FaTimes />}
                                                </td>
                                            );
                                        }
                                        if (keyValue) {
                                            return !Array.isArray(keyValue) ? (
                                                <td key={service.id + keyValue}>
                                                    {keyValue}
                                                </td>
                                            ) : (
                                                <td key={service.id + index}>
                                                    {keyValue.map(item => item + ' ')}
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
                    <Link
                        href={LINK_TERMS_CONDITIONS}
                        className="underline text-greenQ  "
                    >
                        Condiciones del Servicio Qosqomposta
                    </Link>
                </section>
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

export default SeleccionarServicio;
