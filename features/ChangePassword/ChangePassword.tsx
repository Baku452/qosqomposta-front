import { auth } from '@/utils/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { BsLockFill } from 'react-icons/bs';

export interface ChangePasswordProps {
  userEmail: string;
}
const ChangePassword: React.FC<ChangePasswordProps> = ({ userEmail }) => {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  return !showChangePassword ? (
    <button
      type="button"
      className="flex max-w-lg items-center justify-center rounded-lg border-[1px] border-gray-300 p-2 text-center"
      onClick={() => setShowChangePassword(true)}
    >
      <BsLockFill className="mr-2" />
      Cambiar Contraseña
    </button>
  ) : (
    <div className="flex flex-col items-center">
      <input
        type="password"
        id="password"
        className="mt-1 block max-w-xl rounded-md border-gray-300 shadow-sm"
      />
      <div className="mt-4 flex gap-4">
        <button
          type="button"
          className="btn-green flex p-2 !text-white"
          onClick={async () => {
            const email = userEmail;
            if (email) {
              try {
                await sendPasswordResetEmail(auth, email);
                alert('Se ha enviado un correo para restablecer la contraseña.');
              } catch (error) {
                console.error('Error al enviar el correo de restablecimiento:', error);
                alert('Hubo un error al enviar el correo de restablecimiento.');
              }
            }
          }}
        >
          Guardar
        </button>
        <button
          className="flex rounded-lg border-[1px] border-gray-300 p-2"
          onClick={() => setShowChangePassword(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
