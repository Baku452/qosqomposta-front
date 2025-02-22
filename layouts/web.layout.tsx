import { WasteServicesContextProvider } from '@/context/ServicesContext';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/features/HeaderWeb/HeaderWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type LayoutWebProps = {
  children?: React.ReactNode;
};
const LayoutWeb: React.FC<LayoutWebProps> = ({ children }) => {
  return (
    <>
      <WasteServicesContextProvider>
        <HeaderWeb />
        <ToastContainer />
        <main>{children}</main>
        <FooterWeb />
      </WasteServicesContextProvider>
    </>
  );
};

export default LayoutWeb;
