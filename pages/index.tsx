import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import TalleresSectionHome from '@/components/organism/TalleresSectionHome/TalleresSectionHome';
import { GetStaticProps, NextPage } from 'next';
import { WasteManagementService } from '@/types/wasteManagement';
import { useContext, useEffect } from 'react';
import QosqompostaServicesContext, {
  ServiceContextType,
} from '@/context/ServicesContext';

export interface Props {
  data: WasteManagementService[];
}
const Home: NextPage<Props> = ({ data }) => {
  const { setServicesContext } = useContext(
    QosqompostaServicesContext,
  ) as ServiceContextType;

  useEffect(() => {
    if (data && setServicesContext) {
      setServicesContext(data);
    }
  }, [data, setServicesContext]);
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
      {/* <TalleresSectionHome /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.QOSQOMPOSTA_BACKEND_URL}/waste-management`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
