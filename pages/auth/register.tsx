import RegisterForm from '@/components/molecules/RegisterForm/RegisterForm';
import Link from 'next/link';

const Register: React.FC = () => {
  return (
    <>
      <h1>Bienvenido a Qosqomposta</h1>
      <h2 className="font-isidora">Estás a unos pasos de ser el próximo qompostero</h2>
      <RegisterForm />
      <div>
        Ya tienes una cuenta?
        <Link href="/auth/login">
          <a>Inicia sesión</a>
        </Link>
      </div>
    </>
  );
};

export default Register;
