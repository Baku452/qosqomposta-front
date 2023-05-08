import { QosqompostaServicesContextProvider } from '@/context/ServicesContext';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';

export type LayoutWebProps = {
  children?: React.ReactNode;
};
const LayoutWeb: React.FC<LayoutWebProps> = ({ children }) => {
  return (
    <>
      <QosqompostaServicesContextProvider>
        <HeaderWeb />
        <main>{children}</main>
        <FooterWeb />
      </QosqompostaServicesContextProvider>
    </>
  );
};

export default LayoutWeb;
