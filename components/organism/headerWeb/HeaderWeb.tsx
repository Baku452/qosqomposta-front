import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { NavigationWeb } from '@/components/molecules/NavigationWeb/NavigationWeb';
import { ITEMS_NAV } from 'public/data/itemsNav';
import MobileNav from '@/components/molecules/MobileNav/MobileNav';

const HeaderWeb = () => {
  return (
    <nav className="bg-white fixed w-full px-0 md:px-20 top-0 z-50 ">
      <div className="flex justify-between w-full md:max-w-7xl m-auto items-center">
        <Link href="/">
          <a>
            <Image
              width={345}
              height={80}
              alt="Logo Qosqomposta"
              src="/icons/logoQ.png"
            />
          </a>
        </Link>
        <NavigationWeb items={ITEMS_NAV} />
        <MobileNav items={ITEMS_NAV} />
      </div>
    </nav>
  );
};

export default HeaderWeb;