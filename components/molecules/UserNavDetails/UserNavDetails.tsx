import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import Image from 'next/image';
import React from 'react';
export interface UserNavDetailsProps {
    user: UserInfo;
}
const UserNavDetails: React.FC<UserNavDetailsProps> = ({ user }) => {
    return (
        <>
            <div>
                <p>Bienvenido {user.displayName}</p>
                <Image width={50} height={50} src={user.photoURL} />
            </div>
            <div>
                <span>|</span>
                <LogoutButton />
            </div>
        </>
    );
};

export default UserNavDetails;
