import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';

const ServicesData: React.FC = () => {
  const summary = useSelector((state: State) => state.customerApp.subscriptionSummary);
  return (
    <section className="flex w-full justify-between mt-5 gap-5">
      <div className="justify-center bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-4xl font-titles text-greenQ">{summary?.totalWasteWeight} kg</p>
        <h4 className="mt-3 text-center max-w-[189px] ">
          Total Residuos Orgánicos Acumulado
        </h4>
      </div>
      <div className="justify-center bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-4xl font-titles text-greenQ">
          {summary?.totalWasteWeightYear} kg
        </p>
        <h4 className="mt-3 text-center max-w-[189px] ">{`Total Residuos Orgánicos ${new Date().getFullYear()} `}</h4>
      </div>
      <div className="justify-center bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-4xl font-titles text-greenQ">0.0 KG</p>
        <h4 className="mt-3 text-center max-w-[189px] ">{`Total Residuos Reciclables`}</h4>
      </div>
    </section>
  );
};

export default ServicesData;
