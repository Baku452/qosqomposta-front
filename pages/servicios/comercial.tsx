import Head from 'next/head';
import Image from 'next/image';
import { BANNER_PLAN_COMERCIAL } from 'main.config';
import { LINK_TERMS_CONDITIONS } from '@/pagesConfig';
import { createRef, RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import ServiceSection from '@/components/molecules/ServicesSections/ServicesSections';
import { ServiceSectionItem } from '@/types/mainTypes';
import Link from 'next/link';
import {
    BARRIO_QOMPOSTERO_SECTION_TITLE,
    BARRIO_QOMPOSTERO_SECTION_TITLE_CONTENT,
    BARRIO_QOMPOSTERO_SECTION_TITLE_IMG,
    COMPOSTAJE_COMERCIAL_SECTION_IMG,
    COMPOSTAJE_COMERCIAL_SECTION_TITLE,
    LINK_CTA_SERVICIO_COMERCIAL,
} from '@/public/data/planComercial';

const Comercial = () => {
    const sectionsToAppear: ServiceSectionItem[] = useMemo(
        () => [
            {
                id: 'barrio_qompostero',
                title: BARRIO_QOMPOSTERO_SECTION_TITLE,
                content: BARRIO_QOMPOSTERO_SECTION_TITLE_CONTENT,
                imageSection: BARRIO_QOMPOSTERO_SECTION_TITLE_IMG,
                buttonCTA: {
                    link: LINK_CTA_SERVICIO_COMERCIAL,
                    label: 'Más Información',
                },
            },
        ],
        [],
    );
    const [elementVisibility, setElementVisibility] = useState([false, false]);
    const [elementsRefs] = useState<RefObject<HTMLElement>[]>(
        Array.from({ length: 2 }, () => createRef()),
    );

    const handleScroll = useCallback(() => {
        const newVisibility = [...elementVisibility];
        let updated = false;
        elementsRefs.forEach((element, index) => {
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
    }, [elementVisibility, elementsRefs]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [elementVisibility, elementsRefs, handleScroll, sectionsToAppear]);

    return (
        <>
            <Head>
                <title>Planes Comerciales | Qosqomposta</title>
                <meta name="description" content="Planes Comnerciales de Qosqomposta" />
            </Head>
            <div className="flex w-full justify-between">
                <div className="pl-40 pt-5">
                    <h1 className="text-greenQ text-6xl">
                        Planes <br />
                        Barrio <br />o Comerciales
                    </h1>
                </div>
                <Image
                    width={1088}
                    height={479}
                    alt="bannerPlanFamiliar"
                    src={BANNER_PLAN_COMERCIAL}
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
                id="plan-comercial"
                style={{
                    opacity: elementVisibility[1] ? 1 : 0,
                    transition: 'opacity 0.5s',
                }}
                ref={elementsRefs[1]}
                className="container m-auto my-12"
            >
                <div
                    className={`flex bg-gray-100 rounded-3xl p-5 py-12 flex-row-reverse`}
                >
                    <div className="basis-1/3 justify-start p-10 relative">
                        <Image
                            layout="fill"
                            alt="recoleccion residuos organicos"
                            src={COMPOSTAJE_COMERCIAL_SECTION_IMG}
                        />
                    </div>
                    <div className="basis-2/3 max-w-3xl mx-auto">
                        <h2 className="text-greenQ text-3xl">
                            {COMPOSTAJE_COMERCIAL_SECTION_TITLE}
                        </h2>
                        <article>
                            <p className="my-5">
                                Comienza tu camino a la sostenibilidad y posiciónate como
                                una empresa social y ambientalmente responsable. Nuestros
                                planes de manejo de residuos sólidos institucionales
                                incluyen capacitación al personal y promoción por redes
                                sociales.
                            </p>
                            <h3>Recojo y Acopio Comercial</h3>
                            <p>
                                Uds. solo juntan sus residuos compostables en el balde y
                                nosotros nos encargamos del resto. Te brindamos: baldes
                                limpios, control de pesos, promoción de impacto ambiental
                                con tu logo cada 6 meses, sticker en tu local comercial
                                con QR del impacto ambiental, para que tú y tus clientes
                                estén siempre informados.
                            </p>
                            <br />
                            <h3> Compostaje in-situ</h3>
                            <p>
                                Para todos aquellos comercios que tengan espacio de áreas
                                verdes, ponemos a disposición nuestro taller de compostaje
                                e instalación de composteras, insumos y acompañamiento
                                hasta la primera cosecha de compost. Uds mismos pueden
                                gestionar sus residuos compostables y reducir
                                dramaticamente los desperdicios que terminan en botaderos.
                                Todas las empresas, restaurantes y hoteles interesados en
                                gestionar sus residuos sólidos, pueden escribirnos para un
                                paquete personalizado a sus necesidades y volúmenes.
                            </p>
                        </article>
                        <div className="my-2 m-auto px-12"></div>
                        <button className="btn btn-primary block m-auto mt-8">
                            <Link href={LINK_CTA_SERVICIO_COMERCIAL}>
                                <a>Más Información</a>
                            </Link>
                        </button>
                    </div>
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

export default Comercial;
