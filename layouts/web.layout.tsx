import { QosqompostaServicesContextProvider } from '@/context/ServicesContext';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type LayoutWebProps = {
  children?: React.ReactNode;
};
const LayoutWeb: React.FC<LayoutWebProps> = ({ children }) => {
  return (
    <>
      <QosqompostaServicesContextProvider>
        <HeaderWeb />
        <ToastContainer />
        <main>{children}</main>
        <FooterWeb />
      </QosqompostaServicesContextProvider>
    </>
  );
};

export default LayoutWeb;
