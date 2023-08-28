import { ServicesAdmin } from '@/features/ServicesAdmin/ServicesAdmin';
import { NextPage } from 'next';
import React from 'react';
import { FaBoxes } from 'react-icons/fa';

const ServicioAdminPage: NextPage = () => {
  return (
    <div>
      <div className="bg-white mb-5 p-4">
        <div className="flex items-center">
          <FaBoxes className="text-gray-400 mr-2" size={32} />
          <h1 className="font-paragraph font-bold">Servicios Q</h1>
        </div>
        <ServicesAdmin />
      </div>
    </div>
  );
};

export default ServicioAdminPage;
