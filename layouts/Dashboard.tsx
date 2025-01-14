import DashboardAside from '@/features/DashboardAside/DashboardAside';
import ProtectedRoute from '@/components/organism/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './dashboard.module.scss';
import RefreshToken from '@/components/atoms/RefreshToken/RefreshToken';
import { useEffect, useState } from 'react';
import { fetchSubscriptionDetails } from '@/actions/customer.actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { AppUser } from '@/types/stateTypes';
import { CLIENT_TYPE } from '@/constants/services.const';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isOpenNavbar, setIsOpenNavBar] = useState<boolean>(true);
  const dispatch = useDispatch();
  const user = useSelector<State, AppUser>(state => state.appUser);

  const handleSubscriptionDetails = async () => {
    const clientType = user.roles?.includes(CLIENT_TYPE.FAMILY)
      ? CLIENT_TYPE.FAMILY
      : user.roles?.includes(CLIENT_TYPE.COMPANY)
        ? CLIENT_TYPE.COMPANY
        : null;
    if (clientType) {
      await fetchSubscriptionDetails(user.uid, clientType)(dispatch);
    }
  };

  useEffect(() => {
    handleSubscriptionDetails();
  }, []);
  return (
    <ProtectedRoute>
      <main className={styles.dashboard}>
        <DashboardAside openNavbar={isOpenNavbar} setOpenNavbar={setIsOpenNavBar} />
        <div
          className={`${styles.dashboard__body} ${
            !isOpenNavbar && styles.dashboard__bodyExpanded
          }`}
        >
          {children}
        </div>
      </main>
      <ToastContainer />
      <RefreshToken />
    </ProtectedRoute>
  );
};

export default DashboardLayout;
