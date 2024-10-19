import { AppUser } from '@/types/stateTypes';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';
export interface UserNavDetailsProps {
  user: AppUser;
}
const UserNavDetails: React.FC<UserNavDetailsProps> = () => {
  return (
    <div className="flex gap-4 min-w-fit">
      <Link href={'/dashboard'}>
        <div className="flex items-center">
          <p className="mr-4">Mi cuenta</p>
          <FaUser size={20} />
        </div>
      </Link>
    </div>
  );
};

export default UserNavDetails;
