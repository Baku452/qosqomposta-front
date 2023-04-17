import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { NavigationWeb } from '@/components/molecules/NavigationWeb/NavigationWeb';
import { ITEMS_NAV } from 'public/data/itemsNav';
import MobileNav from '@/components/molecules/MobileNav/MobileNav';

const HeaderWeb: React.FC = () => {
    return (
        <nav className="bg-yellowQ sticky w-full px-0 md:px-20 top-0 z-50 shadow-md">
            <div className="flex justify-between w-full md:max-w-7xl m-auto items-center">
                <Link href="/">
                    <a className="border-none">
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
