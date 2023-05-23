import DashboardAside from '@/components/organism/DashboardAside/DashboardAside';
import HeaderDashboard from '@/components/organism/HeaderAuth/HeaderAuth';
import SummaryClient from '@/components/organism/SummaryClient/SummaryClient';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderDashboard />
      <main className="flex">
        <DashboardAside />
        {children}
      </main>
      <ToastContainer />
      <FooterWeb />
    </>
  );
};

export default DashboardLayout;
