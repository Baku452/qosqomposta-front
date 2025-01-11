import { FREQUENCY_SERVICE } from '@/main.config';
import { Subscription } from '@/types/subscription.types';
import { convertPriceToString, defaultValue } from '@/utils/utils';

export interface SubscriptionProps {
  subscription: Subscription;
}
const SubscriptionCard: React.FC<SubscriptionProps> = ({ subscription }) => {
  return (
    <section className="mt-4 flex w-full items-center justify-evenly gap-4 rounded-lg bg-white p-5 shadow-lg">
      <div className="text-center">
        <h4 className="text-lg">Tipo de Servicio</h4>
        <p className="font-titles text-3xl text-greenQ">
          {defaultValue(subscription?.serviceType)}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Modalidad</h4>
        <p className="font-titles text-3xl text-greenQ">
          {subscription?.frequencyService != null
            ? FREQUENCY_SERVICE.get(subscription?.frequencyService)
            : '--'}
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-lg">Costo</h4>
        <p className="font-titles text-3xl text-greenQ">
          {subscription?.mainPrice != null
            ? convertPriceToString(subscription?.mainPrice)
            : '--'}
        </p>
      </div>
    </section>
  );
};

export default SubscriptionCard;
