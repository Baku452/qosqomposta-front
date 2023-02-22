import Head from 'next/head';
import Image from 'next/image';
import { BANNER_PLAN_FAMILIAR } from 'main.config';
import { createRef, RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import ServiceSection from '@/components/molecules/ServicesSections/ServicesSections';
import { ServiceSectionItem } from '@/types';
import Link from 'next/link';
import {
    LINK_CTA_SERVICIO_FAMILIAR,
    ACOPIO_DE_RESIDUOS_ACCORDION,
    ACOPIO_DE_RESIDUOS_CONTENT,
    ACOPIO_DE_RESIDUOS_IMG,
    ACOPIO_DE_RESIDUOS_TITLE,
    MICROQOMPOSTEROS_IMG,
    RECOJO_RECICLABLES_ACCORDION,
    RECOJO_RECICLABLES_ADVERTISE,
    RECOJO_RECICLABLES_CONTENT,
    RECOJO_RECICLABLES_IMG,
    RECOJO_RECICLABLES_TITLE,
    RECOLECCION_RESIDUOS_ORGANICOS_ACCORDION,
    RECOLECCION_RESIDUOS_ORGANICOS_CONTENT,
    RECOLECCION_RESIDUOS_ORGANICOS_TITLE,
    RECOLECCION_RESIDUOS_ORGANICOS_IMG,
} from '@/public/data/planFamiliar';
import { LINK_TERMS_CONDITIONS } from '@/pagesConfig';

const Familiar = () => {
    const sectionsToAppear: ServiceSectionItem[] = useMemo(
        () => [
            {
                id: 'recoleccion_residuos',
                title: RECOLECCION_RESIDUOS_ORGANICOS_TITLE,
                content: RECOLECCION_RESIDUOS_ORGANICOS_CONTENT,
                imageSection: RECOLECCION_RESIDUOS_ORGANICOS_IMG,
                accordionItems: RECOLECCION_RESIDUOS_ORGANICOS_ACCORDION,
                buttonCTA: {
                    link: LINK_CTA_SERVICIO_FAMILIAR,
                    label: 'Inscribirme',
                },
            },
            {
                id: 'recojo_residuos',
                title: ACOPIO_DE_RESIDUOS_TITLE,
                content: ACOPIO_DE_RESIDUOS_CONTENT,
                imageSection: ACOPIO_DE_RESIDUOS_IMG,
                accordionItems: ACOPIO_DE_RESIDUOS_ACCORDION,
                buttonCTA: {
                    link: LINK_CTA_SERVICIO_FAMILIAR,
                    label: 'Inscribirme',
                },
            },
            {
                id: 'recojo_reciclables',
                imageSection: RECOJO_RECICLABLES_IMG,
                title: RECOJO_RECICLABLES_TITLE,
                content: RECOJO_RECICLABLES_CONTENT,
                accordionItems: RECOJO_RECICLABLES_ACCORDION,
                advertise: RECOJO_RECICLABLES_ADVERTISE,
                buttonCTA: {
                    link: LINK_CTA_SERVICIO_FAMILIAR,
                    label: 'Inscribirme',
                },
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
            <section className="container m-auto py-20 text-3xl max-w-5xl">
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
                const {
                    id,
                    title,
                    content,
                    accordionItems,
                    imageSection,
                    advertise,
                    buttonCTA,
                } = sectionService;
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
                        buttonCTA={buttonCTA}
                    />
                );
            })}
            <section
                id="Microqomposteros"
                className="bg-greenQ mt-40 h-80 overflow-visible rounded-3xl flex max-w-7xl m-auto text-white relative"
            >
                <div className="basis-2/3 p-14">
                    <h2 className="text-4xl">MicroQomposteros</h2> <br />
                    <p className="text-lg">
                        Para todas las personas que escogen recojo o acopio individual,
                        ¡Les tenemos novedades! Desde ahora, podrás juntar tus residuos y
                        empezar el proceso de compostaje en el balde, gracias a los
                        microQomposteros: bacterias y hongos que aceleran el proceso de
                        descomposición.
                    </p>
                </div>
                <div className="h-[430px] absolute bottom-0 right-0">
                    <Image
                        alt="microqomposteros"
                        width={420}
                        height={430}
                        src={MICROQOMPOSTEROS_IMG}
                    />
                </div>
            </section>
            <section className="m-auto my-12 text-center">
                <Link href={LINK_TERMS_CONDITIONS}>
                    <a className="underline text-greenQ  ">
                        Condiciones del Servicio Qosqomposta
                    </a>
                </Link>
            </section>
        </>
    );
};

export default Familiar;
