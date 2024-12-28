import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';

const ServicesData: React.FC = () => {
  const summary = useSelector((state: State) => state.customerApp.subscriptionSummary);
  return (
    <section className="mt-5 flex w-full justify-between gap-5">
      <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
        <p className="font-titles text-4xl text-greenQ">{summary?.totalWasteWeight} kg</p>
        <h4 className="mt-3 max-w-[189px] text-center">
          Total Residuos Orgánicos Acumulado
        </h4>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
        <p className="font-titles text-4xl text-greenQ">
          {summary?.totalWasteWeightYear} kg
        </p>
        <h4 className="mt-3 max-w-[189px] text-center">{`Total Residuos Orgánicos ${new Date().getFullYear()} `}</h4>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white p-5 shadow-lg">
        <p className="font-titles text-4xl text-greenQ">0.0 KG</p>
        <h4 className="mt-3 max-w-[189px] text-center">{`Total Residuos Reciclables`}</h4>
      </div>
    </section>
  );
};

export default ServicesData;
