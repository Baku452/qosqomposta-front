import DashboardAside from '@/components/organism/DashboardAside/DashboardAside';
import HeaderDashboard from '@/components/organism/HeaderAuth/HeaderAuth';
import ProtectedRoute from '@/components/organism/ProtectedRoute/ProtectedRoute';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      {/* <HeaderDashboard /> */}
      <main className="flex">
        <DashboardAside />
        <div className="p-5">{children}</div>
      </main>
      <ToastContainer />
      <FooterWeb />
    </ProtectedRoute>
  );
};

export default DashboardLayout;
