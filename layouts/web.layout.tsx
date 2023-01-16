import FooterWeb from '@/components/organism/footerWeb/footerWeb';
import HeaderWeb from '@/components/organism/headerWeb/HeaderWeb';

const LayoutWeb = ({ children }) => {
  return (
    <>
      <HeaderWeb />
      <main>{children}</main>
      <FooterWeb />
    </>
  );
};

export default LayoutWeb;
