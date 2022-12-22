import CardService from '@/components/atoms/CardServices/CardServices';
import { servicesQosqompostaForm } from 'public/data/servicesQosqompostaForm';
import React, { useState } from 'react';

const ServicesQForm: React.FC = () => {
  const [serviceSelected, setServiceSelected] = useState<string>();

  const handleSelectService = (idService: string): void => {
    setServiceSelected(idService);
  };

  return (
    <div>
      {servicesQosqompostaForm.map(service => (
        <CardService
          selectService={handleSelectService}
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServicesQForm;
