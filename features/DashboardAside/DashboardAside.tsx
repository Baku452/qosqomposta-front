import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { State } from '@/reducers/rootReducer';
import { DASHBOARD_ASIDE_NAV_LINKS } from '@/utils/navUtils';
import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction } from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import styles from './DashboardAside.module.scss';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { VALID_ROLES } from '@/main.config';

export interface DashboardAsideProps {
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<SetStateAction<boolean>>;
}
const DashboardAside: React.FC<DashboardAsideProps> = ({ openNavbar, setOpenNavbar }) => {
  const userRoles = useSelector((state: State) => state.appUser.roles as VALID_ROLES[]);
  const userDetails = useSelector((state: State) => state.appUser);

  const currentPath = usePathname();

  return (
    <section
      className={`fixed z-100 flex h-full flex-col items-center bg-white px-5 py-5 shadow-lg transition-all duration-300 ${
        openNavbar ? 'w-[20rem]' : 'w-[5rem]'
      }`}
    >
      <div className={`mb-5 flex ${openNavbar ? 'self-end' : 'self-center'}`}>
        <button
          className={`transition-transform ${openNavbar ? 'rotate-0' : 'rotate-180'}`}
          onClick={() => setOpenNavbar(value => !value)}
        >
          <BiArrowFromRight size={30} />
        </button>
      </div>
      <div className="mb-4 flex gap-4 border-b-[1px] text-center">
        <Image
          className="m-auto mb-4"
          alt="User profile"
          width={50}
          height={50}
          src={userDetails.photoURL ? userDetails.photoURL : '/images/defaultAvatar.png'}
        />

        {openNavbar ? (
          <div className="text-left">
            <p className="font-bold">{userDetails.displayName}</p>
            <p className="text-gray-600">{userDetails.email}</p>
          </div>
        ) : null}
      </div>
      <div className="h-full w-full text-left">
        <nav>
          <ul
            className={`flex flex-col ${
              openNavbar ? 'items-start px-5' : 'items-center px-0'
            }`}
          >
            {userRoles &&
              DASHBOARD_ASIDE_NAV_LINKS.map(
                navlink =>
                  userRoles.some(role => navlink.userRole.includes(role)) && (
                    <Link
                      href={navlink.path}
                      className={classNames(
                        'my-5 inline-flex cursor-pointer items-center hover:bg-white',
                        styles.navlink,
                        currentPath === navlink.path && styles.navLinkActive,
                        !openNavbar && styles.collapsedIcon,
                      )}
                      key={navlink.key}
                      onClick={() => console.log('click')}
                      passHref
                    >
                      {navlink.icon}
                      {openNavbar ? (
                        <div className="ml-3 align-middle">{navlink.name}</div>
                      ) : null}
                    </Link>
                  ),
              )}
          </ul>
        </nav>
      </div>
      <div className="justify-self-end">
        <LogoutButton isOpenAside={openNavbar} />
      </div>
    </section>
  );
};

export default DashboardAside;
