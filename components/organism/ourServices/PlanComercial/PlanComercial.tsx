import Card from '@/components/atoms/Card/Card';
import { PLAN_COMERCIAL, PLAN_COMERCIAL_IMAGE } from 'main.config';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const PlanComercialItems: React.FC = () => {
  return (
    <div className="min-h flex h-full flex-col justify-between">
      <div>
        <h3 className="mb-7 text-xl">{PLAN_COMERCIAL.title}</h3>
        <ul>
          {PLAN_COMERCIAL.itemsIncludes.map(item => (
            <li className="flex items-center text-lg leading-8" key={item.key}>
              <AiOutlineCheckCircle className="mr-2 fill-greenQ" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn btn-primary m-auto mt-5 block">
          <Link href={'/servicios/personal'}>Leer Más</Link>
        </button>
      </div>
    </div>
  );
};

const PlanComercial: React.FC = () => {
  return (
    <Card
      content={<PlanComercialItems />}
      altImage={PLAN_COMERCIAL.title}
      imageHeight={425}
      imageWidth={643}
      image={PLAN_COMERCIAL_IMAGE}
    />
  );
};

export default PlanComercial;
