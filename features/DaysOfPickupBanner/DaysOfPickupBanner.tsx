import { FRIDAY_PICKUP, SATURDAY_PICKUP } from '@/main.config';

const DaysOfPickupBanner: React.FC = () => {
  return (
    <section className="mt-4 w-full rounded-lg bg-greenQ bg-opacity-35 p-4 text-center">
      <h3 className="m-auto w-fit border-b-[1px] border-b-black font-paragraph text-2xl font-thin">
        Dias y sectores de recojo
      </h3>
      <div className="mt-4 flex justify-evenly">
        <div>
          <h4 className="text-2xl font-bold capitalize">Viernes</h4>
          {SATURDAY_PICKUP.map((item, index) => (
            <p className="text-xl" key={item + index}>
              {item}
            </p>
          ))}
        </div>
        <div>
          <h4 className="text-2xl font-bold capitalize">Sábado</h4>
          {FRIDAY_PICKUP.map((item, index) => (
            <p className="text-xl" key={item + index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DaysOfPickupBanner;
