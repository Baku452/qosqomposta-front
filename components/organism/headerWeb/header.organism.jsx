import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderWeb = React.memo(() => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <nav className="bg-gradient-to-b absolute w-full px-0 md:px-20 top-0 z-50 from-black">
      <div className="flex justify-between w-full md:max-w-7xl m-auto p-10 items-center">
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
        <div className="block md:hidden">
          <GiHamburgerMenu size={30} color="white" />
        </div>
        <div className="hidden md:block">
          <button className="text-white px-10">
            <a target="blank" href="https://wa.link/yagfmk">
              <BsWhatsapp className="inline mr-2" />
              Comúnicate con nosotros !
            </a>
          </button>
          <button className="btn-primary">
            <a
              target="blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqooaViePpe84wgvXvs2zYubLUz5MaAoQWldChauBwvs9RHg/viewform"
            >
              Únete Ya !
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
});

HeaderWeb.displayName = HeaderWeb;
export { HeaderWeb };
