import DashboardAside from '@/features/DashboardAside/DashboardAside';
import ProtectedRoute from '@/components/organism/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './dashboard.module.scss';
import RefreshToken from '@/components/atoms/RefreshToken/RefreshToken';
import { PlacesContextProvider } from '@/context/PlacesContext';
import { useState } from 'react';

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isOpenNavbar, setIsOpenNavBar] = useState<boolean>(true);

  return (
    <ProtectedRoute>
      <PlacesContextProvider>
        {/* <HeaderDashboard /> */}
        <main className={styles.dashboard}>
          <span className={`absolute  min-h-[300px] top-0 w-full bg-yellowQ`} />
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
      </PlacesContextProvider>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
