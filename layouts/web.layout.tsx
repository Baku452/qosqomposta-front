import { PlacesContextProvider } from '@/context/PlacesContext';
import { WasteServicesContextProvider } from '@/context/ServicesContext';
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
      <WasteServicesContextProvider>
        <PlacesContextProvider>
          <HeaderWeb />
          <ToastContainer />
          <main>{children}</main>
          <FooterWeb />
        </PlacesContextProvider>
      </WasteServicesContextProvider>
    </>
  );
};

export default LayoutWeb;
