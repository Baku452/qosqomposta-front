import { FREQUENCY_SERVICE } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { convertPriceToString, defaultValue } from '@/utils/utils';
import { useSelector } from 'react-redux';

const MembershipSummary: React.FC = () => {
  const subscriptionSummary = useSelector(
    (state: State) => state.customerApp.subscriptionSummary,
  );
  return (
    <section className="flex w-full gap-4 items-center justify-evenly shadow-lg rounded-lg p-5 bg-white mt-4">
      <div className="text-center">
        <h4 className="text-lg">Tipo de Servicio</h4>
        <p className="text-3xl font-titles text-greenQ">
          {defaultValue(subscriptionSummary?.serviceType)}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Modalidad</h4>
        <p className="text-3xl font-titles text-greenQ">
          {subscriptionSummary?.frequencyService != null
            ? FREQUENCY_SERVICE.get(subscriptionSummary?.frequencyService)
            : '--'}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Costo</h4>
        <p className="text-3xl font-titles text-greenQ">
          {subscriptionSummary?.mainPrice != null
            ? convertPriceToString(subscriptionSummary?.mainPrice)
            : '--'}
        </p>
      </div>
    </section>
  );
};

export default MembershipSummary;
