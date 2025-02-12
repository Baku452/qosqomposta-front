import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavigationWebProps } from '../NavigationWeb/NavigationWeb';
import { LOGIN_PATH } from '@/routes/routes.config';

const MobileNav: React.FC<NavigationWebProps> = ({ items }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        size={40}
        onClick={() => setDisplayMenu(true)}
        className="block cursor-pointer lg:hidden"
      />

      <div
        className={`fixed right-0 top-0 z-[100] h-full w-2/5 transform bg-black transition-transform duration-300 ease-out lg:hidden ${
          displayMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-5 flex w-full justify-end">
          <AiOutlineClose
            className="relative z-[150] mr-1 mt-5 cursor-pointer text-white hover:opacity-80"
            size={30}
            onClick={() => setDisplayMenu(false)}
          />
        </div>

        <nav className="z-[150] mr-2 h-full w-full items-center p-2 px-10 leading-9 text-white">
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.label} className="hover:opacity-80">
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link
                href={LOGIN_PATH}
                className="btn btn-primary inline-block !bg-greenQ !text-white"
              >
                Ingresar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
