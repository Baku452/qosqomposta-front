import { useDispatch } from 'react-redux';
import { DELIVERY_ORDERS_HEADERS } from '../constants';
import { useEffect } from 'react';
import { fetchDeliveryOrders } from '@/actions/customer.actions';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { LOCALE_PERU } from '@/main.config';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DeliveryOrders: React.FC = () => {
  const subscriptionId = useSelector(
    (state: State) => state.customerApp.subscriptionSummary?.id,
  );

  const deliveryOrders = useSelector(
    (state: State) => state.customerApp.deliveryOrders.delivery_orders,
  );
  const dispatch = useDispatch();

  const fetchDeliveryOrderData = async (): Promise<void> => {
    subscriptionId && (await fetchDeliveryOrders(subscriptionId)(dispatch));
  };
  useEffect(() => {
    fetchDeliveryOrderData();
  }, [subscriptionId]);
  return (
    <section className="w-full mt-10 bg-white rounded-xl p-5">
      <h5 className="text-center pb-5 text-xl">Historial de recojo</h5>
      <table className="w-full border-none rounded-xl">
        <thead className="">
          <tr className="bg-gray-200 text-black font-semibold border-none">
            {DELIVERY_ORDERS_HEADERS.map((item, index) => {
              return (
                <td
                  key={item.key}
                  className={`px-4 py-2 ${index === 0 ? 'rounded-tl-lg' : ''} ${
                    index === DELIVERY_ORDERS_HEADERS.length - 1 ? 'rounded-tr-lg' : ''
                  }`}
                >
                  {item.title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {deliveryOrders?.map(order => {
            return (
              <tr key={order.id}>
                <td className="capitalize">
                  {order.date_received
                    ? format(new Date(order.date_received), 'LLL dd, yyyy', {
                        locale: es,
                      })
                    : '--'}
                </td>
                <td>
                  {order.date_received
                    ? new Date(order.date_received).toLocaleTimeString(LOCALE_PERU, {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })
                    : '--'}
                </td>
                <td>{order.waste_weight} kg</td>
                <td>0.00 kg</td>
                <td>{order.courier.name}</td>
                <td>{order.note ?? '--'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DeliveryOrders;
