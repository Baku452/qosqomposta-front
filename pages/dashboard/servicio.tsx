import { fetchSubscriptionByClientType } from '@/actions/subscription.actions';
import LoadingRecords from '@/components/molecules/LoadingRecords/LoadingRecords';
import { CLIENT_TYPE } from '@/constants/services.const';
import StatusClient from '@/features/Customer/Summary/StatusClient/StatusClient';
import SubscriptionCard from '@/features/SubscriptionCard/SubscriptionCard';
import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ServicioClientPage: NextPage = () => {
  const dispatch = useDispatch();
  const appUser = useSelector((state: State) => state.appUser);
  const customerApp = useSelector((state: State) => state.customerApp);
  const subscription = useSelector((state: State) => state.customerApp.subscription);

  const fetchSubscription = async () => {
    const customerId =
      customerApp.familySummary?.familyId ?? customerApp.companySummary?.customerId;
    customerId &&
      appUser.roles &&
      (await fetchSubscriptionByClientType(customerId, appUser.roles)(dispatch));
  };
  useEffect(() => {
    fetchSubscription();
  }, []);
  return (
    <section className={`w-full`}>
      <StatusClient />
      {/* {subscription?.isFetching ? (
        <LoadingRecords />
      ) : (
        subscription?.data ? (
          <SubscriptionCard subscription={subscription.data} />
        ) : (
          <div>No subscription data available</div>
        )
      )} */}
    </section>
  );
};

export default ServicioClientPage;
