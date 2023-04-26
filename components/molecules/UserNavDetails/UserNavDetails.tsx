import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { AppUser } from '@/types/stateTypes';
import Image from "next/legacy/image";
import React from 'react';
export interface UserNavDetailsProps {
    user: AppUser;
}
const UserNavDetails: React.FC<UserNavDetailsProps> = ({ user }) => {
    return (
        <div className="flex gap-4">
            <div>
                <p>Bienvenido {user.displayName}</p>
                {user.photoURL && <Image width={50} height={50} src={user.photoURL} />}
            </div>
            <span>|</span>
            <div>
                <LogoutButton />
            </div>
        </div>
    );
};

export default UserNavDetails;
