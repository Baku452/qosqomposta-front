import QosqompostaServicesContext, { ContextState } from '@/context/ServicesContext';
import React, { useContext } from 'react';

const QosqompostaServiceForm: React.FC = () => {
    const { servicesContext } = useContext(QosqompostaServicesContext) as ContextState;
    console.log(servicesContext);
    return (
        <>
            <div>Service</div>
            {servicesContext &&
                servicesContext.map(service => <p key={service._id}>{service.name}</p>)}
        </>
    );
};

export default QosqompostaServiceForm;
