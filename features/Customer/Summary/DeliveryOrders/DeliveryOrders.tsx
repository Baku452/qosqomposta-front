import { useDispatch } from 'react-redux';
import { DELIVERY_ORDERS_HEADERS } from '../constants';
import { useEffect } from 'react';
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

  const fetchDeliveryOrderData = async (): Promise<void> => {
    subscriptionId &&
      (await fetchDeliveryOrders(subscriptionId, SUMMARY_LIMIT_ORDERS)(dispatch));
  };
  useEffect(() => {
    fetchDeliveryOrderData();
  }, [subscriptionId]);
  return (
    <section className="w-full mt-10 bg-white rounded-xl p-5">
      <h5 className="text-center pb-5 text-xl">Últimos recojos</h5>
      <table className="w-full border-none rounded-xl">
        <thead className="">
          <tr className="bg-gray-200 text-black font-semibold border-none">
            {DELIVERY_ORDERS_HEADERS.map((item, index) => {
              return (
                <td
                  key={item.key}
                  className={`pr-4 py-2 ${index === 0 ? 'rounded-tl-lg' : ''} ${
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
