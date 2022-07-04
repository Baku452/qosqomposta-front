import Head from 'next/head';
import 'normalize.css/normalize.css';
import { BannerLanding, OurServices } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/eveleth" rel="stylesheet" />
        <link href="http://fonts.cdnfonts.com/css/isidora" rel="stylesheet" />
      </Head>
      <BannerLanding />
      <OurServices />
    </>
  );
}
