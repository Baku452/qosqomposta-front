import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';
import React, { useContext, useState } from 'react';
import { RiBikeFill } from 'react-icons/ri';
import { FaMountain } from 'react-icons/fa';
import { GiHeartBottle } from 'react-icons/gi';

type ServicesIcons = {
    [key: string]: React.ReactNode;
};

const iconClassnames = 'text-greenQ';
export const ICONS_SERVICES: ServicesIcons = {
    compostaje: <RiBikeFill size={50} className={iconClassnames} />,
    acopio: <FaMountain size={50} className={iconClassnames} />,
    reciclables: <GiHeartBottle size={50} className={iconClassnames} />,
};

const QosqompostaServiceForm: React.FC = () => {
    const { defaultSelectedService, mergedServicesContext } = useContext(
        QosqompostaServicesContext,
    ) as ContextState;

    const [activeServices, setSelectedService] = useState<string | undefined>(
        defaultSelectedService,
    );

    const activeServiceStyle = 'bg-yellowQ';
    return (
        <>
            <h2>Escoje tu Plan Q</h2>
            <div className="flex gap-4">
                {mergedServicesContext &&
                    mergedServicesContext.map(service => (
                        <div
                            key={service._id}
                            className="items-center text-center text-black cursor-pointer flex flex-col justify-between rounded-lg border-yellowQ border-2 basis-1/3"
                        >
                            <div className="w-full">
                                <h3 className="bg-yellowQ px-4 h-16 flex items-center text-black font-normal font-paragraph">
                                    {service.name}
                                </h3>
                                <p>{service.summary}</p>
                            </div>
                            <div>{service.icon && ICONS_SERVICES[service.icon]}</div>
                            <div className="flex w-full ">
                                {service.modality &&
                                    service.modality.map((modality, index) => (
                                        <button
                                            onClick={() =>
                                                setSelectedService(modality.id)
                                            }
                                            key={index}
                                            className={`${
                                                activeServices === modality.id
                                                    ? activeServiceStyle
                                                    : 'bg-transparent'
                                            } py-2 last:border-r-0 flex-grow !font-normal !text-sm border-2 border-yellowQ border-b-0 border-l-0`}
                                        >
                                            {modality.name}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default QosqompostaServiceForm;
