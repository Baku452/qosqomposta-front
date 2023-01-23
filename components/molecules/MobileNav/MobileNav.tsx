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
        <div className="fixed w-2/5 h-full bg-black z-[100] top-0 right-0 flex items-end flex-col">
          <AiOutlineClose
            className="z-[150] mr-1 mt-5 relative text-white"
            size={40}
            onClick={() => setDisplayMenu(!displayMenu)}
          />
          <nav className="text-white h-full z-[150] leading-9 p-2 items-center mr-2 ">
            <ul>
              {items.map(item => (
                <Link key={item.label} passHref href={item.link}>
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
