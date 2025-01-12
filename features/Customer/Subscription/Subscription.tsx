import { FREQUENCY_SERVICE } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { convertPriceToString, defaultValue } from '@/utils/utils';
import { useSelector } from 'react-redux';

const Subscription: React.FC = () => {
  const subscriptionSummary = useSelector(
    (state: State) => state.customerApp.subscriptionSummary,
  );
  return (
    <section className="mt-4 flex w-full items-center justify-evenly gap-4 rounded-lg bg-white p-5 shadow-lg">
      <div className="text-center">
        <h4 className="text-lg">Tipo de Servicio</h4>
        <p className="font-titles text-3xl text-greenQ">
          {defaultValue(subscriptionSummary?.serviceType)}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Modalidad</h4>
        <p className="font-titles text-3xl text-greenQ">
          {subscriptionSummary?.frequencyService != null
            ? FREQUENCY_SERVICE.get(subscriptionSummary?.frequencyService)
            : '--'}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Costo</h4>
        <p className="font-titles text-3xl text-greenQ">
          {subscriptionSummary?.mainPrice != null
            ? convertPriceToString(subscriptionSummary?.mainPrice)
            : '--'}
        </p>
      </div>
    </section>
  );
};

export default Subscription;
