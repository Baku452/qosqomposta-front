import { FooterWeb, HeaderWeb } from '@/components/index';

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
