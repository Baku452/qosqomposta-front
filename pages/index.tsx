import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import TalleresSectionHome from '@/components/organism/TalleresSectionHome/TalleresSectionHome';
import { GetStaticProps, NextPage } from 'next';
import { QosqompostaService } from '@/types/serviceQosqomposta';
import { useContext, useEffect, useState } from 'react';
import { QosqompostaServicesContext } from '@/context/ServicesContext';

export interface Props {
    data: QosqompostaService[];
}
const Home: NextPage<Props> = ({ data }) => {
    const [context, setContext] = useContext(QosqompostaServicesContext);

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
    const response = await fetch(
        `${process.env.QOSQOMPOSTA_BACKEND_URL}/qosqomposta-service`,
    );
    const data = await response.json();

    console.log(data);

    // Return the data as props
    return {
        props: {
            data,
        },
    };
};

export default Home;
