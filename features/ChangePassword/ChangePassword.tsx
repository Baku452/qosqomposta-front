import Spinner from '@/components/atoms/Spinner/Spinner';
import { auth } from '@/utils/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { BsLockFill } from 'react-icons/bs';

export interface ChangePasswordProps {
  userEmail: string;
}
const ChangePassword: React.FC<ChangePasswordProps> = ({ userEmail }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const handleChangePassword = async () => {
    setIsFetching(true);
    try {
      await sendPasswordResetEmail(auth, userEmail);
      alert('Se ha enviado un correo para restablecer la contraseña.');
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento:', error);
      alert('Hubo un error al enviar el correo de restablecimiento.');
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <button
      type="button"
      className="flex max-w-lg items-center justify-center rounded-lg border-[1px] border-gray-300 p-2 text-center"
      onClick={handleChangePassword}
      disabled={isFetching}
    >
      {isFetching ? <Spinner color="black" size="xs" /> : <BsLockFill className="mr-2" />}
      Cambiar Contraseña
    </button>
  );
};

export default ChangePassword;
