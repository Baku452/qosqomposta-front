import { ServicesAdmin } from '@/features/ServicesAdmin/ServicesAdmin';
import { NextPage } from 'next';
import React from 'react';
import { FaBoxes } from 'react-icons/fa';

const ServicioAdminPage: NextPage = () => {
  return (
    <div>
      <div className="mb-5 p-4">
        <div className="flex items-center">
          <FaBoxes className="text-greenQ -400 mr-2" size={32} />
          <h1 className="font-paragraph text-greenQ  font-bold">Servicios Q</h1>
        </div>
        <ServicesAdmin />
      </div>
    </div>
  );
};

export default ServicioAdminPage;
