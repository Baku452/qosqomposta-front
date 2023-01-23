import { FooterWeb, HeaderWeb } from '@/components/index';
import HeaderAuth from '@/organism/headerAuth';

const AuthLayout = ({ children }) => {
  return (
    <div className=' h-screen"'>
      <HeaderAuth />
      <main className="flex items-center">{children}</main>
    </div>
  );
};

export default AuthLayout;
