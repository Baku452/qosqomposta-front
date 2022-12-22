import RegisterForm from '@/components/molecules/RegisterForm/RegisterForm';
import Link from 'next/link';

const Register: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-40">
        <h1>Bienvenido a Qosqomposta !</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
