import { FooterWeb } from '@/components/index';
import AuthHeader from '@/components/organism/authHeader/AuthHeader';

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <AuthHeader />
        <main className="p-5 min-h-screen">{children}</main>
        <FooterWeb />
      </div>
    </>
  );
};

export default AuthLayout;
