import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserNavDetails: React.FC = () => {
  return (
    <div className="flex min-w-fit gap-4">
      <Link href={'/dashboard'}>
        <div className="flex items-center">
          <FaUser size={20} />
          <p className="mr-4">Mi cuenta</p>
        </div>
      </Link>
    </div>
  );
};

export default UserNavDetails;
