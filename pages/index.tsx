import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import { GetStaticProps, NextPage } from 'next';
import { WasteService } from '@/types/service.pricing';
import { useEffect } from 'react';
import { useServicesContext } from '@/context/ServicesContext';
import { WASTE_SERVICES } from '@/routes/apiRoutes';

export interface Props {
  data: WasteService[];
}
const Home: NextPage<Props> = ({ data }) => {
  const { services, setServices } = useServicesContext();

  useEffect(() => {
    if (data && services) {
      setServices(data);
    }
  }, [data, services]);
  return (
    <>
      <Head>
        <title>Qosqomposta | Servicio de compostaje en ciudad del Cusco</title>
        <meta
          name="description"
          content="Somos una startup cusqueña que promueve compostaje y compost en la ciudad del Cusco. Únete a Qosqomposta y nuestros servicios"
        />
      </Head>
      <BannerLanding />
      <DescriptionWeb />
      <OurServices />
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

export default Home;
