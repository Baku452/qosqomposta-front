import { useDispatch } from 'react-redux';
import { DELIVERY_ORDERS_HEADERS } from '../constants';
import { useCallback, useEffect } from 'react';
import { fetchDeliveryOrders } from '@/actions/customer.actions';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { SUMMARY_LIMIT_ORDERS } from '@/main.config';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Tooltip from '@/components/Tooltip/Tooltip';
import { FaInfoCircle } from 'react-icons/fa';

const DeliveryOrders: React.FC = () => {
  const subscriptionId = useSelector(
    (state: State) => state.customerApp.subscriptionSummary?.id,
  );

  const deliveryOrders = useSelector(
    (state: State) => state.customerApp.deliveryOrders.delivery_orders,
  );
  const dispatch = useDispatch();

  const fetchDeliveryOrderLastData = useCallback(async (): Promise<void> => {
    if (subscriptionId) {
      await fetchDeliveryOrders(subscriptionId, SUMMARY_LIMIT_ORDERS, 'DESC')(dispatch);
    }
  }, [subscriptionId, dispatch]);

  useEffect(() => {
    fetchDeliveryOrderLastData();
  }, [subscriptionId, fetchDeliveryOrderLastData]);

  console.log(deliveryOrders);
  return (
    <section className="mt-10 w-full rounded-xl bg-white p-5">
      <h5 className="pb-5 text-center text-xl">Últimos recojos</h5>
      <table className="w-full rounded-xl border-none">
        <thead className="">
          <tr className="border-none bg-gray-200 font-semibold text-black">
            {DELIVERY_ORDERS_HEADERS.map((item, index) => {
              return (
                <td
                  key={item.key}
                  className={`py-2 pr-4 ${index === 0 ? 'rounded-tl-lg' : ''} ${
                    index === DELIVERY_ORDERS_HEADERS.length - 1 ? 'rounded-tr-lg' : ''
                  }`}
                >
                  {item.tooltipContent ? (
                    <Tooltip text={item.tooltipContent}>
                      <div className="flex items-center gap-1">
                        <span>{item.title}</span>
                        <FaInfoCircle />
                      </div>
                    </Tooltip>
                  ) : (
                    item.title
                  )}
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
                    ? format(new Date(order.date_received), 'pp')
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
