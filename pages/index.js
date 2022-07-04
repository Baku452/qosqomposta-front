import Head from 'next/head';
import Script from 'next/script';
import 'normalize.css/normalize.css';
import { BannerLanding, OurServices } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qosqomposta | Servicio de compostaje de la ciudad del Cusco</title>
        <link href="https://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/isidora" rel="stylesheet" />
      </Head>
      <BannerLanding />
      <OurServices />
    </>
  );
}
