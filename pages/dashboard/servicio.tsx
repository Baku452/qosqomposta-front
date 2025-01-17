import { fetchSubscriptionByClientType } from '@/actions/subscription.actions';
import { NoRecords } from '@/components/atoms/NoRecords/NoRecords';
import LoadingRecords from '@/components/molecules/LoadingRecords/LoadingRecords';
import StatusClient from '@/features/Customer/Summary/StatusClient/StatusClient';
import TuRutaCard from '@/features/Customer/TuRutaCard/TuRutaCard';
import DaysOfPickupBanner from '@/features/DaysOfPickupBanner/DaysOfPickupBanner';
import SubscriptionCard from '@/features/SubscriptionCard/SubscriptionCard';
import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { FaBan } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const ServicioClientPage: NextPage = () => {
  const dispatch = useDispatch();
  const appUser = useSelector((state: State) => state.appUser);
  const subscription = useSelector((state: State) => state.customerApp.subscription);

  const fetchSubscription = async () => {
    const customerId = appUser.uid;

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
      {subscription?.isFetching ? (
        <LoadingRecords />
      ) : subscription?.data ? (
        <SubscriptionCard subscription={subscription.data} />
      ) : (
        <NoRecords
          message="No tienes un servicio activo"
          iconSize={70}
          CustomIcon={FaBan}
          className="h-[calc(100dvh-225px)]"
          messageClassname="text-2xl"
        />
      )}
      {subscription?.isFetching ? (
        <LoadingRecords />
      ) : subscription?.data ? (
        <TuRutaCard
          route="Combi"
          dayOfPickup={subscription?.data?.dayOfPickup ?? '--'}
          hourAproximate={'--'}
        />
      ) : null}

      {subscription?.isFetching ? <LoadingRecords /> : <DaysOfPickupBanner />}
    </section>
  );
};

export default ServicioClientPage;
