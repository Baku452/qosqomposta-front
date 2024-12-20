import PlanFamiliar from './PlanFamiliar/PlanFamiliar';
import PlanComercial from './PlanComercial/PlanComercial';
import { BACKGROUND_SERVICES_HOME } from '@/constants/services.home';
//Styles
import styles from './ourServices.module.scss';

const OurServices = () => {
  return (
    <section
      className={styles.serviceQosqomposta}
      style={{ backgroundImage: `url(${BACKGROUND_SERVICES_HOME})` }}
    >
      <div className={`m-auto max-w-6xl py-10`}>
        <div className="container mx-auto">
          <div className="mb-10 px-10">
            <h2 className="title mb-5 text-center text-xl text-greenQ lg:text-4xl">
              Sé parte del cambio{' '}
            </h2>
            <h3 className="font-regular text-center font-paragraph text-xl">
              ¡Descubre nuestros planes de recolección y acopio en Cusco! <br />
              ¡Elige el más adecuado para tu hogar o tu empresa!
            </h3>
          </div>
          <div className="flex flex-col md:flex-row">
            <PlanFamiliar />
            <PlanComercial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
