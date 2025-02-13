import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';

const ServicesData: React.FC = () => {
  const summary = useSelector((state: State) => state.customerApp.subscriptionSummary);
  return (
    <section className="mx-5 mt-5 flex w-fit flex-col justify-between gap-5 lg:mx-0 lg:w-full lg:flex-row">
      <h2 className="block self-start px-5 lg:hidden">Resumen Pesos acumulados</h2>

      <div className="flex flex-1 flex-row items-center justify-between rounded-lg bg-white p-5 shadow-lg lg:flex-col lg:justify-center">
        <p className="basis-3/4 text-center font-titles text-xl text-greenQ lg:basis-auto lg:text-left lg:text-4xl">
          {summary?.totalWasteWeight} kg
        </p>
        <h4 className="mt-3 max-w-[189px] text-center text-sm lg:text-lg">
          Total Residuos Orgánicos Acumulado
        </h4>
      </div>
      <div className="flex flex-1 flex-row items-center justify-center rounded-lg bg-white p-5 shadow-lg lg:flex-col">
        <p className="basis-3/4 text-center font-titles text-xl text-greenQ lg:basis-auto lg:text-left lg:text-4xl">
          {summary?.totalWasteWeightYear} kg
        </p>
        <h4 className="mt-3 max-w-[189px] text-center text-sm lg:text-lg">{`Total Residuos Orgánicos ${new Date().getFullYear()} `}</h4>
      </div>
      <div className="flex flex-1 flex-row items-center justify-center rounded-lg bg-white p-5 shadow-lg lg:flex-col">
        <p className="basis-3/4 text-center font-titles text-xl text-greenQ lg:basis-auto lg:text-left lg:text-4xl">
          0.0 KG
        </p>
        <h4 className="mt-3 max-w-[189px] text-center text-sm lg:text-lg">{`Total Residuos Reciclables`}</h4>
      </div>
    </section>
  );
};

export default ServicesData;
