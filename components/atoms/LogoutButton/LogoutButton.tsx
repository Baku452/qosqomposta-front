import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LogoutButton: React.FC = () => {
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

    return <button onClick={handleLogoutButton}>Cerrar Sesión</button>;
};

export default LogoutButton;
