import Link from 'next/link';
import { ItemsNav } from 'public/data/itemsNav';
import React, { useState } from 'react';

import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

export interface NavigationWebProps {
  items: ItemsNav[];
}

const NavigationWeb: React.FC<NavigationWebProps> = ({ items }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="basis-2/3">
      <ul className="flex justify-evenly items-center">
        {items.map(item => (
          <li className="group" key={item.label}>
            <Link href={item.link}>{item.label}</Link>
            {item.options && (
              <ul className="hidden group-hover">
                {item.options.map(item => (
                  <Link key={item.label} passHref href={item.link}>
                    <li>
                      {item.label}
                      <a></a>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <button className="btn btn-primary">
            <Link href={'/'}>Únete Ya</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { NavigationWeb };
