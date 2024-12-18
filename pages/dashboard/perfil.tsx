import Profile from '@/features/Customer/Profile/Profile';
import { NextPage } from 'next';

const PerfilPage: NextPage = () => {
  return (
    <section className={`w-full`}>
      <Profile />
      <section className="rounded-lg bg-white"></section>
    </section>
  );
};

export default PerfilPage;
