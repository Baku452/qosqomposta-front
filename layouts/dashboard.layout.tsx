import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';
import { ToastContainer } from 'react-toastify';

export type DashboardLayoutProps = {
    children?: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <>
            <HeaderWeb />
            <main>{children}</main>
            <ToastContainer />
            <FooterWeb />
        </>
    );
};

export default DashboardLayout;
