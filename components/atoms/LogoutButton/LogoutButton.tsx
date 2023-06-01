import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { BiLogOut } from 'react-icons/bi';

export interface LogoutButtonProps {
  isOpenAside: boolean;
}
const LogoutButton: React.FC<LogoutButtonProps> = ({ isOpenAside }) => {
  const router = useRouter();

  const handleLogoutButton = async () => {
    try {
      await signOut(auth);
      Cookies.remove('user_token');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogoutButton}>
      <div className="flex justify-center items-center">
        <BiLogOut size={30} className="mr-2" />
        {isOpenAside ? 'Cerrar Sesión' : null}
      </div>
    </button>
  );
};

export default LogoutButton;
