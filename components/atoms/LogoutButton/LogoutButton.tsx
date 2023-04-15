import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';

const LogoutButton: React.FC = () => {
    const handleLogoutButton = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    };

    return <button onClick={handleLogoutButton}>Cerrar Sesión</button>;
};

export default LogoutButton;
