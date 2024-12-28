import Head from 'next/head';
import Link from 'next/link';

import { LINK_TERMS_CONDITIONS, REGISTER_PATH } from '@/routes/routes.config';
import { GetStaticProps, NextPage } from 'next';
import { useServicesContext } from '@/context/ServicesContext';
import { useEffect, useState } from 'react';

import { TABLE_HEADERS_SELECT } from '@/constants/services.const';
import { FaCheck, FaTimes } from 'react-icons/fa';

//Styles
import styles from './seleccionar.module.scss';
import { useDispatch } from 'react-redux';
import { setSelectedRegisterService } from '@/actions/services.actions';
import { useRouter } from 'next/router';
import LoadingOverlay from '@/components/molecules/LoaderOverlay/LoaderOverlay';
import { SelectedService, WasteService } from '@/types/wasteManagement';
import { WASTE_SERVICES } from '@/routes/apiRoutes';
export interface SeleccionarServicioProps {
  data: WasteService[];
}
const SeleccionarServicio: NextPage<SeleccionarServicioProps> = ({ data }) => {
  const { selectedService, services, setServices, setSelectedService } =
    useServicesContext();

  const [activeService, setActiveService] = useState<SelectedService | null>(
    selectedService,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectService = (serviceId: string): void => {
    setLoading(true);
    serviceId && dispatch(setSelectedRegisterService(serviceId));
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    router.push(REGISTER_PATH);
  };
  useEffect(() => {
    if (data && setServices) {
      setServices(data);
    }
  }, [data, setServices]);

  useEffect(() => {
    if (selectedService) {
      setActiveService(selectedService);
    }
  }, [selectedService]);

  return (
    <>
      <Head>
        <title>Seleccione su Plan | Qosqomposta</title>
        <meta name="description" content="Planes Comnerciales de Qosqomposta" />
      </Head>
      {loading && <LoadingOverlay />}
      <div className={`p-5 ${styles.backgroundPage}`}>
        <h2 className="pt-10 text-center text-4xl">Elige tu Plan</h2>
        <p className="py-5 text-center">Puedes cancelar en cualquier momento.</p>

        {/* {activeService && activeService.modality.length > 1 && (
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
                          <button
                            onClick={() => handleSelectService(service._id)}
                            className="bg-yellowQ rounded-lg py-3 px-4"
                          >
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
                        <td key={service.id + keyValue}>{keyValue}</td>
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
        )} */}
        <section className="m-auto my-12 text-center">
          <Link href={LINK_TERMS_CONDITIONS} className="text-greenQ underline">
            Condiciones del Servicio Qosqomposta
          </Link>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.QOSQOMPOSTA_BACKEND_URL}/${WASTE_SERVICES.GET_ALL}`,
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default SeleccionarServicio;
