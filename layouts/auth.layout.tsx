import { FooterWeb } from '@/components/index';
import AuthHeader from '@/components/organism/authHeader/AuthHeader';

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
      <FooterWeb />
    </>
  );
};

export default AuthLayout;
