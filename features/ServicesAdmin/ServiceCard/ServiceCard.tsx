import { SERVICES_ADMIN } from '@/routes/routes.config';
import { WasteService } from '@/types/wasteManagement';
import { convertPriceToString } from '@/utils/utils';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';

export interface ServiceCardProps {
  service: WasteService;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const optionsDateFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return (
    <Link href={`${SERVICES_ADMIN}/${service.waste_service_id}`}>
      <div className="bg-white rounded-2xl shadow-md py-4 px-5 hover:bg-gray-100 transition cursor-pointer">
        <div className="flex justify-between mb-5">
          <h5 className="font-semibold">{service.name}</h5>
          <FaPencilAlt className="text-greenQ" />
        </div>

        {/* <div className="my-4">
          <h6>Precio</h6>
          <p className="text-gray-500">{convertPriceToString(service.price)}</p>
          <h6>Modalidad</h6>
          <p className="capitalize text-gray-500">{service.modality ?? ''}</p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p>Creado:</p>
            <p className="text-gray-500">
              {new Date(service.createdAt ?? '').toLocaleDateString(
                'es-ES',
                optionsDateFormat,
              )}
            </p>
          </div>
          <div>
            <p>Última edición:</p>
            <p className="text-gray-500">
              {new Date(service.updatedAt ?? '').toLocaleDateString(
                'es-ES',
                optionsDateFormat,
              )}
            </p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};
