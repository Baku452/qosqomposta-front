import DescriptionWeb from '@/components/molecules/DescriptionWeb/DescriptionWeb';
import BannerLanding from '@/components/organism/landingBanner/bannerLanding';
import OurServices from '@/components/organism/ourServices/OurServices';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import TalleresSectionHome from '@/components/organism/TalleresSectionHome/TalleresSectionHome';
import Image from 'next/image';
import { BANNER_PLAN_FAMILIAR } from 'main.config';

const Familiar = () => {
    return (
        <>
            <Head>
                <title>Planes Familiares | Qosqomposta</title>
                <meta name="description" content="Planes Individuales de Qosqomposta" />
            </Head>
            <div className="flex w-full justify-between">
                <div className="pl-40 pt-5">
                    <h1 className="text-greenQ text-6xl">
                        Planes <br></br> Familiares
                    </h1>
                </div>
                <Image
                    width={1088}
                    height={479}
                    alt="bannerPlanFamiliar"
                    src={BANNER_PLAN_FAMILIAR}
                />
            </div>
            <section className="container m-auto py-20 text'">
                <p>
                    Gracias por unirte al{' '}
                    <span className="text-yellowQ">MOVIMIENTO QOMPOSTERO</span>
                    por un Cusco sostenible. ¡Nuestro equipo convierte lo que antes
                    botabas, en un alimento para la tierra! Lee todas las opciones que
                    tenemos para ti y tu familia.
                </p>
            </section>
        </>
    );
};

export default Familiar;
