import HeaderDashboard from '@/components/organism/HeaderAuth/HeaderAuth';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';
import { ToastContainer } from 'react-toastify';

export type DashboardLayoutProps = {
    children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <>
            <HeaderDashboard />
            <main>{children}</main>
            <ToastContainer />
            <FooterWeb />
        </>
    );
};

export default DashboardLayout;
