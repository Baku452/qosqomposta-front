import React from 'react';
import { ServiceQosqomposta } from 'types/serviciosQosqomposta';
import Image from 'next/image';
import { RiStoreLine } from 'react-icons/ri';

export interface CardServiceProps {
  service: ServiceQosqomposta;
  selectService: (idService: string) => void;
}
const CardService: React.FC<CardServiceProps> = ({ service, selectService }) => {
  return (
    <div onClick={() => selectService(service.id)}>
      <h3>{service.name}</h3>
      {service.image ? (
        <Image width={100} alt={service.name} src={service.image} />
      ) : (
        <RiStoreLine />
      )}
      <p>{service.description}</p>
      <div>
        {service.pricing &&
          service.pricing.map(price => (
            <div key={price.id}>
              <h4>{price.label}</h4>
              <p>{price.value}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardService;
