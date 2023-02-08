import Head from 'next/head';
import Image from 'next/image';
import { BANNER_PLAN_FAMILIAR } from 'main.config';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import Accordion from '@/components/atoms/Accordion';

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
            <section className="container m-auto py-20 text-xl">
                <p className="px-5 text-center">
                    Gracias por unirte al{' '}
                    <span className="text-yellowQ font-semibold">
                        MOVIMIENTO QOMPOSTERO
                    </span>{' '}
                    por un Cusco sostenible. ¡Nuestro equipo convierte lo que antes
                    botabas, en un alimento para la tierra! Lee todas las opciones que
                    tenemos para ti y tu familia
                </p>
            </section>
            <section className="container m-auto">
                <div>
                    <h2 className="text-greenQ text-3xl">
                        Recolección de Residuos Orgánicos
                    </h2>
                    <p>
                        El servicio comienza cuando te entregamos el balde Qosqomposta. Tú
                        juntas tus residuos orgánicos en este balde y nosotros lo
                        recogemos de tu domicilio y te entregamos un nuevo balde limpio y
                        listo para ser usado otra vez.
                    </p>

                    <Accordion title="Horarios y días de recojo">
                        Horarios: 7am - 1pm Días de recojo: JUEVES: San Blas, Centro
                        Histórico VIERNES: Cercado, Santiago, Wanchaq Norte SABADO: San
                        Sebastian, San Jeronimo, Wanchaq Sur
                    </Accordion>
                    <p>
                        El servicio comienza cuando te entregamos el balde Qosqomposta. Tú
                        juntas tus residuos orgánicos en este balde y nosotros lo
                        recogemos de tu domicilio y te entregamos un nuevo balde limpio y
                        listo para ser usado otra vez.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Familiar;
