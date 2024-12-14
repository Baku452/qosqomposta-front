import { useDispatch } from 'react-redux';
import { DELIVERY_ORDERS_HEADERS } from '../constants';
import { useEffect } from 'react';
import { fetchDeliveryOrders } from '@/actions/customer.actions';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';

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
      <h5 className="text-center pb-5">Historial de recojo</h5>
      <table className="w-full border-none rounded-xl">
        <thead className="">
          <tr className="bg-gray-200 text-black font-semibold rounded-xl">
            {DELIVERY_ORDERS_HEADERS.map(item => {
              return <td key={item.key}>{item.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {deliveryOrders?.map(order => {
            return (
              <tr key={order.id}>
                <td>
                  {order.date_received
                    ? new Date(order.date_received).toLocaleDateString()
                    : '--'}
                </td>
                <td>
                  {order.date_received
                    ? new Date(order.date_received).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
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
