import { FREQUENCY_SERVICE } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { convertPriceToString, defaultValue } from '@/utils/utils';
import { useSelector } from 'react-redux';

const MembershipSummary: React.FC = () => {
  const subscriptionSummary = useSelector(
    (state: State) => state.customerApp.subscriptionSummary,
  );
  return (
    <section className="mx-5 mt-4 flex w-fit flex-col items-center justify-evenly gap-4 rounded-lg bg-white p-5 shadow-lg lg:mx-0 lg:w-full lg:flex-row">
      <div className="text-center">
        <h4 className="text-lg">Tipo de Servicio</h4>
        <p className="font-titles text-xl text-greenQ lg:text-3xl">
          {defaultValue(subscriptionSummary?.serviceType)}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Modalidad</h4>
        <p className="font-titles text-xl text-greenQ lg:text-3xl">
          {subscriptionSummary?.frequencyService != null
            ? FREQUENCY_SERVICE.get(subscriptionSummary?.frequencyService)
            : '--'}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Costo</h4>
        <p className="font-titles text-xl text-greenQ lg:text-3xl">
          {subscriptionSummary?.mainPrice != null
            ? convertPriceToString(subscriptionSummary?.mainPrice)
            : '--'}
        </p>
      </div>
    </section>
  );
};

export default MembershipSummary;
