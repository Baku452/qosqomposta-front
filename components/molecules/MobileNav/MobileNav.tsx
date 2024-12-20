import Link from 'next/link';
import { ItemsNav } from 'public/data/itemsNav';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavigationWebProps } from '../NavigationWeb/NavigationWeb';

const MobileNav: React.FC<NavigationWebProps> = ({ items }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        size={40}
        onClick={() => setDisplayMenu(!displayMenu)}
        className="block lg:hidden"
      />
      {displayMenu && (
        <div className="fixed right-0 top-0 z-[100] flex h-full w-2/5 flex-col items-end bg-black">
          <AiOutlineClose
            className="relative z-[150] mr-1 mt-5 text-white"
            size={40}
            onClick={() => setDisplayMenu(!displayMenu)}
          />
          <nav className="z-[150] mr-2 h-full items-center p-2 leading-9 text-white">
            <ul>
              {items.map(item => (
                <Link key={item.label} passHref href={item.link} legacyBehavior>
                  <li>
                    <a>{item.label}</a>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
