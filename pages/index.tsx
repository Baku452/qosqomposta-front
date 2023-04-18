import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import TalleresSectionHome from '@/components/organism/TalleresSectionHome/TalleresSectionHome';

function Home() {
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
}

export default Home;
