import { State } from '@/reducers/rootReducer';
import { useSelector } from 'react-redux';

const ServicesData: React.FC = () => {
  const summary = useSelector((state: State) => state.subcriptionSummary.subscription);
  return (
    <section className="flex w-full justify-between mt-4 gap-5">
      <div className="bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-5xl font-titles text-greenQ">{summary?.totalWasteWeight} kg</p>
        <h4 className="mt-4">Total Residuos Orgánicos Acumulado</h4>
      </div>
      <div className="bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-5xl font-titles text-greenQ">
          {summary?.totalWasteWeightYear} kg
        </p>
        <h4 className="mt-4">{`Total Residuos Orgánicos ${new Date().getFullYear()} `}</h4>
      </div>
      <div className="bg-white p-5 flex items-center flex-col shadow-lg rounded-lg flex-1">
        <p className="text-5xl font-titles text-greenQ">0.0 KG</p>
        <h4 className="mt-4">{`Total Residuos Reciclables`}</h4>
      </div>
    </section>
  );
};

export default ServicesData;
