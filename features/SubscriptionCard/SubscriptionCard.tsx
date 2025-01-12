import { FREQUENCY_SERVICE } from '@/main.config';
import { Subscription } from '@/types/subscription.types';
import { convertPriceToString, defaultValue } from '@/utils/utils';

export interface SubscriptionProps {
  subscription: Subscription;
}
const SubscriptionCard: React.FC<SubscriptionProps> = ({ subscription }) => {
  return (
    <section className="mt-4 w-full rounded-lg bg-white p-10 shadow-lg">
      <div className="flex items-center justify-evenly">
        <div className="flex basis-1/2 flex-col gap-8 border-r-[1px] border-r-gray-200">
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
        </div>
        <div className="flex basis-1/2 flex-col gap-8">
          <div className="text-center">
            <h4 className="text-lg">Costo</h4>
            <p className="font-titles text-3xl text-greenQ">
              {subscription?.mainPrice != null
                ? convertPriceToString(subscription?.mainPrice)
                : '--'}
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg">Número de baldes</h4>
            <p className="font-titles text-3xl text-greenQ">
              {defaultValue(String(subscription.baldes))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 pt-16">
        <button className="btn btn-primary flex h-fit items-center gap-2 !bg-greenQ !font-paragraph !text-white shadow-lg">
          Cambiar mi Servicio
        </button>
        <button className="btn btn-primary flex h-fit items-center gap-2 !bg-white !font-paragraph shadow-md shadow-greenQ">
          Conocer otro servicios
        </button>
      </div>
    </section>
  );
};

export default SubscriptionCard;
