import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';
import React, { useContext } from 'react';
import { RiBikeFill } from 'react-icons/ri';
import { FaMountain } from 'react-icons/fa';
import { GiHeartBottle } from 'react-icons/gi';

type ServicesIcons = {
    [key: string]: React.ReactNode;
};

export const ICONS_SERVICES: ServicesIcons = {
    compostaje: <RiBikeFill />,
    acopio: <FaMountain />,
    reciclables: <GiHeartBottle />,
};

const QosqompostaServiceForm: React.FC = () => {
    const { mergedServicesContext } = useContext(
        QosqompostaServicesContext,
    ) as ContextState;
    return (
        <>
            <div>Service</div>
            {mergedServicesContext &&
                mergedServicesContext.map(service => (
                    <>
                        <p key={service._id}>{service.name}</p>
                        {service.icon && ICONS_SERVICES[service.icon]}
                    </>
                ))}
        </>
    );
};

export default QosqompostaServiceForm;
