import Head from 'next/head';
import 'normalize.css/normalize.css';
import { BannerLanding, OurServices } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Qosqomposta | Compostaje de la ciudad del Cusco</title>
        <link href="http://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
        <link href="http://fonts.cdnfonts.com/css/isidora" rel="stylesheet" />
      </Head>
      <BannerLanding />
      <OurServices />
    </>
  );
}
