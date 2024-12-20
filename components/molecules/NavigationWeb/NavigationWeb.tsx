import { LOGIN_PATH } from '@/routes/routes.config';
import Link from 'next/link';
import { ItemsNav } from 'public/data/itemsNav';
import React from 'react';

import UserNavDetails from '../UserNavDetails/UserNavDetails';
import Cookies from 'js-cookie';

export interface NavigationWebProps {
  items: ItemsNav[];
}

const NavigationWeb: React.FC<NavigationWebProps> = ({ items }) => {
  const userToken = Cookies.get('user_token');

  return (
    <>
      <nav className="basis-2/3">
        <ul className="hidden items-center justify-evenly lg:flex">
          {items.map(item => (
            <li className="group relative py-2" key={item.label}>
              <Link href={item.link} legacyBehavior>
                {item.label}
              </Link>
              {item.options && (
                <ul className="absolute left-1/2 top-8 z-150 m-auto hidden w-44 -translate-x-1/2 overflow-hidden rounded-lg border border-gray-300 bg-white text-center group-hover:block">
                  {item.options.map(item => (
                    <Link key={item.label} passHref href={item.link} legacyBehavior>
                      <li className="leading-10 hover:cursor-pointer hover:bg-yellowQ">
                        <a>{item.label}</a>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button className="btn btn-primary !bg-greenQ !text-white">
              <Link href={LOGIN_PATH}>Ingresar</Link>
            </button>
          </li>
        </ul>
      </nav>
      {userToken && <UserNavDetails />}
    </>
  );
};

export { NavigationWeb };
