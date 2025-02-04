import Card from '@/components/atoms/Card/Card';
import { PLAN_FAMILIAR, PLAN_FAMILIAR_IMAGE } from 'main.config';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const PlanFamiliarItems: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h3 className="mb-7 text-xl">{PLAN_FAMILIAR.title}</h3>
        <ul>
          {PLAN_FAMILIAR.itemsIncludes.map(item => (
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

const PlanFamiliar: React.FC = () => {
  return (
    <Card
      content={<PlanFamiliarItems />}
      altImage={PLAN_FAMILIAR.title}
      imageHeight={425}
      imageWidth={643}
      image={PLAN_FAMILIAR_IMAGE}
    />
  );
};

export default PlanFamiliar;
