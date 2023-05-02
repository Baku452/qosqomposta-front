import React from 'react';
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
    return (
        <>
            <h2>Escoje tu Plan Q</h2>
        </>
    );
};

export default QosqompostaServiceForm;
