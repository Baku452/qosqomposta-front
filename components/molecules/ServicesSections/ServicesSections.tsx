import Accordion from '@/components/atoms/Accordion';
import { RECOLECCION_RESIDUOS_ORGANICOS_CTA } from '@/main.config';
import { AccordionItems } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject } from 'react';

export interface ServiceSectionProps {
    id: string;
    visibility: boolean;
    title: string;
    content: string;
    elementRefId?: RefObject<HTMLElement>;
    imageSection?: string;
    accordionItems?: AccordionItems[];
    advertise?: string;
    imgLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
    id,
    visibility,
    title,
    content,
    elementRefId,
    imageSection,
    accordionItems,
    advertise,
    imgLeft,
}) => {
    return (
        <section
            id={id}
            style={{
                opacity: visibility ? 1 : 0,
                transition: 'opacity 0.5s',
            }}
            ref={elementRefId}
            className="container m-auto my-12"
        >
            <div
                className={`flex bg-gray-100 rounded-3xl p-5 py-12 ${
                    imgLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
                <div className="basis-1/3 justify-start p-10 ">
                    <Image
                        width={420}
                        height={501}
                        alt="recoleccion residuos organicos"
                        src={imageSection}
                    />
                </div>
                <div className="basis-2/3 max-w-3xl mx-auto">
                    <h2 className="text-greenQ text-3xl">{title}</h2>
                    {content && <p className="my-5">{content}</p>}
                    <div className="my-2 m-auto px-12">
                        <>
                            {accordionItems &&
                                accordionItems.map(item => (
                                    <Accordion
                                        defaultOpen={true}
                                        key={item.title}
                                        title={item.title}
                                    >
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.content,
                                            }}
                                        />
                                    </Accordion>
                                ))}
                            <h6 className="mt-5 text-sm">{advertise}</h6>
                        </>
                    </div>
                    <button className="btn btn-primary block m-auto mt-8">
                        <Link href={RECOLECCION_RESIDUOS_ORGANICOS_CTA}>
                            <a>Inscribirse</a>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
