import Head from 'next/head';
import Image from 'next/image';
import { BANNER_PLAN_FAMILIAR, RECOLECCION_RESIDUOS_ORGANICOS_CTA } from 'main.config';
import Accordion from '@/components/atoms/Accordion';
import {
    ACOPIO_DE_RESIDUOS_ACCORDION,
    ACOPIO_DE_RESIDUOS_CONTENT,
    ACOPIO_DE_RESIDUOS_IMG,
    ACOPIO_DE_RESIDUOS_TITLE,
    RECOJO_RECICLABLES_ACCORDION,
    RECOJO_RECICLABLES_ADVERTISE,
    RECOJO_RECICLABLES_CONTENT,
    RECOJO_RECICLABLES_IMG,
    RECOJO_RECICLABLES_TITLE,
    RECOLECCION_RESIDUOS_ORGANICOS_ACCORDION,
    RECOLECCION_RESIDUOS_ORGANICOS_CONTENT,
    RECOLECCION_RESIDUOS_ORGANICOS_IMG,
    RECOLECCION_RESIDUOS_ORGANICOS_TITLE,
} from '@/pagesConfig';
import { createRef, RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import ServiceSection from '@/components/molecules/ServicesSections/ServicesSections';
import { ServiceSectionItem } from '@/types';

const Familiar = () => {
    const sectionsToAppear: ServiceSectionItem[] = useMemo(
        () => [
            {
                id: 'recoleccion_residuos',
                title: RECOLECCION_RESIDUOS_ORGANICOS_TITLE,
                content: RECOLECCION_RESIDUOS_ORGANICOS_CONTENT,
                imageSection: RECOLECCION_RESIDUOS_ORGANICOS_IMG,
                accordionItems: RECOLECCION_RESIDUOS_ORGANICOS_ACCORDION,
            },
            {
                id: 'recojo_residuos',
                title: ACOPIO_DE_RESIDUOS_TITLE,
                content: ACOPIO_DE_RESIDUOS_CONTENT,
                imageSection: ACOPIO_DE_RESIDUOS_IMG,
                accordionItems: ACOPIO_DE_RESIDUOS_ACCORDION,
            },
            {
                id: 'recojo_reciclables',
                imageSection: RECOJO_RECICLABLES_IMG,
                title: RECOJO_RECICLABLES_TITLE,
                content: RECOJO_RECICLABLES_CONTENT,
                accordionItems: RECOJO_RECICLABLES_ACCORDION,
                advertise: RECOJO_RECICLABLES_ADVERTISE,
            },
        ],
        [],
    );
    const [elementVisibility, setElementVisibility] = useState(
        sectionsToAppear.map(() => false),
    );
    const [elementsRefs] = useState<RefObject<HTMLElement>[]>(
        sectionsToAppear.map(() => createRef()),
    );

    const handleScroll = useCallback(() => {
        const newVisibility = [...elementVisibility];
        let updated = false;
        sectionsToAppear.forEach((element, index) => {
            const elementRef = elementsRefs[index];
            if (
                elementRef.current &&
                elementRef.current.getBoundingClientRect().top < window.innerHeight
            ) {
                newVisibility[index] = true;
                updated = true;
            }
        });
        if (updated) {
            setElementVisibility(newVisibility);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [elementVisibility, elementsRefs, sectionsToAppear]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [elementVisibility, elementsRefs, handleScroll, sectionsToAppear]);

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
            {sectionsToAppear.map((sectionService, index) => {
                const { id, title, content, accordionItems, imageSection, advertise } =
                    sectionService;
                return (
                    <ServiceSection
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                        visibility={elementVisibility[index]}
                        elementRefId={elementsRefs[index]}
                        accordionItems={accordionItems}
                        imageSection={imageSection}
                        advertise={advertise}
                        imgLeft={Boolean(index % 2 === 0)}
                    />
                );
            })}
            {/* <section
                style={{
                    opacity: elementVisibility[0] ? 1 : 0,
                    transition: 'opacity 0.5s',
                }}
                ref={elementsRefs[0]}
                className="container m-auto"
            >
                <div className="flex bg-gray-100 rounded-3xl p-5">
                    <div className="basis-1/3 justify-start p-10">
                        <Image
                            width={420}
                            height={501}
                            alt="recoleccion residuos organicos"
                            src={RECOLECCION_RESIDUOS_ORGANICOS_IMG}
                        />
                    </div>
                    <div className="basis-2/3">
                        <h2 className="text-greenQ text-3xl">
                            Recolección de Residuos Orgánicos
                        </h2>
                        <p className="my-5">
                            El servicio comienza cuando te entregamos el balde
                            Qosqomposta. Tú juntas tus residuos orgánicos en este balde y
                            nosotros lo recogemos de tu domicilio y te entregamos un nuevo
                            balde limpio y listo para ser usado otra vez.
                        </p>
                        <div className="my-2">
                            <Accordion title={HOURS_DATES_ACCORDION}>
                                <span className="text-greenQ font-semibold">
                                    Horarios: 7am - 1pm
                                </span>
                                <span className="text-greenQ font-semibold">
                                    Días de recojo:
                                </span>
                                <br />
                                JUEVES: San Blas, Centro Histórico VIERNES: Cercado,
                                Santiago, Wanchaq Norte SABADO: San Sebastian, San
                                Jeronimo, Wanchaq Sur
                            </Accordion>
                            <Accordion title={MONTHLY_COST_ACCORDION}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: MONTHLY_COST_ACCORDION_CONTENT,
                                    }}
                                />
                            </Accordion>
                            <Accordion title={ZERO_RESIDUE_ACCORDION}>
                                {ZERO_RESIDUE_ACCORDION_CONTENT}
                            </Accordion>
                        </div>
                        <button className="btn btn-primary block m-auto mt-8">
                            <Link href={RECOLECCION_RESIDUOS_ORGANICOS_CTA}>
                                <a>Inscribirse</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            <section
                style={{
                    opacity: elementVisibility[1] ? 1 : 0,
                    transition: 'opacity 0.5s',
                }}
                ref={elementsRefs[1]}
                className="container m-auto"
            >
                <div className="flex bg-gray-100 rounded-3xl p-5">
                    <div className="basis-1/3 justify-start p-10">
                        <Image
                            width={420}
                            height={501}
                            alt="recoleccion residuos organicos"
                            src={RECOLECCION_RESIDUOS_ORGANICOS_IMG}
                        />
                    </div>
                    <div className="basis-2/3">
                        <h2 className="text-greenQ text-3xl">
                            Recolección de Residuos Orgánicos
                        </h2>
                        <p className="my-5">
                            El servicio comienza cuando te entregamos el balde
                            Qosqomposta. Tú juntas tus residuos orgánicos en este balde y
                            nosotros lo recogemos de tu domicilio y te entregamos un nuevo
                            balde limpio y listo para ser usado otra vez.
                        </p>
                        <div className="my-2">
                            <Accordion title={HOURS_DATES_ACCORDION}>
                                <span className="text-greenQ font-semibold">
                                    Horarios: 7am - 1pm
                                </span>
                                <span className="text-greenQ font-semibold">
                                    Días de recojo:
                                </span>
                                JUEVES: San Blas, Centro Histórico VIERNES: Cercado,
                                Santiago, Wanchaq Norte SABADO: San Sebastian, San
                                Jeronimo, Wanchaq Sur
                            </Accordion>
                            <Accordion title={MONTHLY_COST_ACCORDION}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: MONTHLY_COST_ACCORDION_CONTENT,
                                    }}
                                />
                            </Accordion>
                            <Accordion title={ZERO_RESIDUE_ACCORDION}>
                                {ZERO_RESIDUE_ACCORDION_CONTENT}
                            </Accordion>
                        </div>
                        <button className="btn btn-primary block m-auto mt-8">
                            <Link href={RECOLECCION_RESIDUOS_ORGANICOS_CTA}>
                                <a>Inscribirse</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Familiar;
