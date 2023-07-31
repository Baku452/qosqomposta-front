import DashboardAside from '@/components/organism/DashboardAside/DashboardAside';
import HeaderDashboard from '@/components/organism/HeaderAuth/HeaderAuth';
import ProtectedRoute from '@/components/organism/ProtectedRoute/ProtectedRoute';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './dashboard.module.scss';
import RefreshToken from '@/components/atoms/RefreshToken/RefreshToken';
import { PlacesContextProvider } from '@/context/PlacesContext';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <PlacesContextProvider>
        {/* <HeaderDashboard /> */}
        <main className={styles.dashboard}>
          <DashboardAside />
          <div className={styles.dashboard__body}>{children}</div>
        </main>
        <ToastContainer />
        <RefreshToken />
        <FooterWeb />
      </PlacesContextProvider>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
