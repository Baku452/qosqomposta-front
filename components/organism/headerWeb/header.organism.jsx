import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderWeb = React.memo(() => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <nav className="bg-black bg-opacity-70 backdrop-blur-lg fixed w-full px-0 md:px-20 top-0 z-50 from-black">
      <div className="flex text-white justify-between w-full md:max-w-7xl m-auto p-3 items-center">
        <div className="flex items-center justify-between space-x-5">
          <Link href="/">
            <a>
              <Image
                width={180}
                height={70}
                alt="Logo Qosqomposta"
                src="/icons/whiteLogo.svg"
              />
            </a>
          </Link>
          <Link href="/">
            <a>Precios</a>
          </Link>
          <Link href="/">
            <a>Compañia</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu size={30} color="white" />
        </div>
        <div className="hidden md:flex space-x-5 items-center">
          <Link href="/">
            <a>Login</a>
          </Link>
          <button className="btn btn-outline-primary text-white px-10">
            <a target="blank" href="https://wa.link/yagfmk">
              <BsWhatsapp className="inline mr-2" />
              Hablar con un asesor
            </a>
          </button>
          <button className="btn btn-primary">
            <Link target="blank" href="/auth/register">
              <a>Unirme ahora</a>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
});

HeaderWeb.displayName = HeaderWeb;
export { HeaderWeb };
