import DashboardAside from '@/components/organism/DashboardAside/DashboardAside';
import HeaderDashboard from '@/components/organism/HeaderAuth/HeaderAuth';
import ProtectedRoute from '@/components/organism/ProtectedRoute/ProtectedRoute';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './dashboard.module.scss';
import RefreshToken from '@/components/atoms/RefreshToken/RefreshToken';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      {/* <HeaderDashboard /> */}
      <main className={styles.dashboard}>
        <DashboardAside />
        <div className="p-5 w-full">{children}</div>
      </main>
      <ToastContainer />
      <RefreshToken />
      <FooterWeb />
    </ProtectedRoute>
  );
};

export default DashboardLayout;
