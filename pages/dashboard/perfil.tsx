import CompanyProfile from '@/features/Company/Profile/Profile';
import CustomerProfile from '@/features/Customer/Profile/Profile';
import { VALID_ROLES } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

const PerfilPage: NextPage = () => {
  const appUser = useSelector((state: State) => state.appUser);
  return (
    <section className={`w-full`}>
      {appUser.roles?.includes(VALID_ROLES.COMPANY) ? (
        <CompanyProfile />
      ) : appUser.roles?.includes(VALID_ROLES.CLIENT) ? (
        <CustomerProfile />
      ) : null}
      <section className="rounded-lg bg-white"></section>
    </section>
  );
};

export default PerfilPage;
