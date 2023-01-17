import { PLAN_COMERCIAL, PLAN_COMERCIAL_IMAGE } from 'main.config';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const PlanComercial: React.FC = () => {
  return (
    <section className="flex items-center m-auto justify-between rounded-3xl bg-gray-100 overflow-auto mb-14">
      <div className="p-5">
        <h3 className="text-xl mb-7">{PLAN_COMERCIAL.title}</h3>
        <ul>
          {PLAN_COMERCIAL.itemsIncludes.map(item => (
            <li className=" flex text-lg items-center leading-8" key={item.key}>
              <AiOutlineCheckCircle className="fill-greenQ mr-2" />
              {item.title}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary m-auto block mt-5">
          <Link href={'/servicios/personal'}>Leer Más</Link>
        </button>
      </div>
      <Image
        width={643}
        height={425}
        src={PLAN_COMERCIAL_IMAGE}
        alt={PLAN_COMERCIAL.title}
      />
    </section>
  );
};

export default PlanComercial;
