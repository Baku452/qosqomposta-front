import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

import { NavigationWeb } from '@/components/molecules/NavigationWeb/NavigationWeb';
import { ITEMS_NAV } from 'public/data/itemsNav';
import MobileNav from '@/components/molecules/MobileNav/MobileNav';
import { LogoAppColors } from '@/main.config';

const HeaderWeb: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-yellowQ px-4 shadow-md md:px-20">
      <div className="m-auto flex w-full items-center justify-between md:max-w-7xl">
        <Link href="/" className="border-none">
          <Image
            width={345}
            height={80}
            alt="Logo Qosqomposta"
            src={LogoAppColors.color}
          />
        </Link>
        <NavigationWeb items={ITEMS_NAV} />
        <MobileNav items={ITEMS_NAV} />
      </div>
    </nav>
  );
};

export default HeaderWeb;
