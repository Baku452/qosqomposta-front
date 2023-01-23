import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import Script from 'next/script';
import 'normalize.css/normalize.css';

function Home() {
  return (
    <>
      <Head>
        <title>Qosqomposta | Servicio de compostaje en ciudad del Cusco</title>
        <meta
          name="description"
          content="Somos una startup cusqueña que promueve compostaje y compost en la ciudad del Cusco. Únete a Qosqomposta y nuestros servicios"
        />
        <link href="https://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/isidora" rel="stylesheet" />
      </Head>
      <BannerLanding />
      <DescriptionWeb />
      <OurServices />
    </>
  );
}

export default (Home);
