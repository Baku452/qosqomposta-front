import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { memo } from 'react';

const memoHeaderAuth = () => {
  return (
    <nav className="shadow-md w-full px-0 md:px-20 top-0 z-50">
      <div className="flex text-white justify-between w-full md:max-w-7xl m-auto p-3 items-center">
        <div className="flex items-center justify-between space-x-5">
          <Link href="/">
            <a>
              <Image
                width={300}
                height={100}
                alt="Logo Qosqomposta"
                src="/icons/blackLogo.svg"
              />
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu size={30} color="white" />
        </div>
        <div className="hidden md:flex space-x-5 items-center">
          <Link href="/">
            <a>Login</a>
          </Link>
          <button className="btn btn-outline-primary px-10 text-black">
            <a target="blank" href="https://wa.link/yagfmk">
              <BsWhatsapp className="inline mr-2" />
              Hablar con un asesor
            </a>
          </button>
          <button className="btn btn-primary">
            <Link href="/auth/login">
              <a target="blank">Login</a>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

// HeaderAuth.displayName = HeaderAuth;
const HeaderAuth = memo(memoHeaderAuth);
export default HeaderAuth;
