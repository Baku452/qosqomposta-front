import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { AppUser } from '@/stateTypes';
import Image from 'next/image';
import React from 'react';
export interface UserNavDetailsProps {
    user: AppUser;
}
const UserNavDetails: React.FC<UserNavDetailsProps> = ({ user }) => {
    return (
        <>
            <div>
                <p>Bienvenido {user.displayName}</p>
                {user.photoURL && <Image width={50} height={50} src={user.photoURL} />}
            </div>
            <div>
                <span>|</span>
                <LogoutButton />
            </div>
        </>
    );
};

export default UserNavDetails;
