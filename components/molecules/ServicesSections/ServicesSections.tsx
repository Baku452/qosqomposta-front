/* eslint-disable @next/next/no-img-element */
import Accordion from '@/components/atoms/Accordion/Accordion';
import { RECOLECCION_RESIDUOS_ORGANICOS_CTA } from '@/main.config';
import { AccordionItems } from '@/types/mainTypes';
import Image from 'next/legacy/image';
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
  buttonCTA?: {
    link: string;
    label: string;
  };
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
  buttonCTA,
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
        className={`flex rounded-3xl bg-gray-100 p-5 py-12 ${
          imgLeft ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className="max-h relative basis-1/3 justify-start p-10">
          <img alt="recoleccion residuos organicos" src={imageSection} />
        </div>
        <div className="mx-auto max-w-3xl basis-2/3">
          <h2 className="text-3xl text-greenQ">{title}</h2>
          {content && <p className="my-5">{content}</p>}
          <div className="m-auto my-2 px-12">
            <>
              {accordionItems &&
                accordionItems.map(item => (
                  <Accordion defaultOpen={true} key={item.title} title={item.title}>
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
          <button className="btn btn-primary m-auto mt-8 block">
            <Link href={buttonCTA?.link || ''}>{buttonCTA?.label}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
