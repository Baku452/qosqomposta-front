import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { State } from '@/reducers/rootReducer';
import { DASHBOARD_ADMIN_NAV_LINKS } from '@/utils/navUtils';
import Image from 'next/image';
import Link from 'next/link';
import { SetStateAction } from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import styles from './DashboardAside.module.scss';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export interface DashboardAsideProps {
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<SetStateAction<boolean>>;
}
const DashboardAside: React.FC<DashboardAsideProps> = ({ openNavbar, setOpenNavbar }) => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  const userDetails = useSelector((state: State) => state.appUser);

  const currentPath = usePathname();
  return (
    <section
      className={`bg-white h-full shadow-lg transition-all duration-300 flex flex-col fixed items-center z-100 py-5 px-5 ${
        openNavbar ? 'w-[20rem]' : 'w-[5rem]'
      }`}
    >
      <div className={`flex mb-5 ${openNavbar ? 'self-end' : 'self-center'}`}>
        <button
          className={`transition-transform ${openNavbar ? 'rotate-0 ' : 'rotate-180'}`}
          onClick={() => setOpenNavbar(value => !value)}
        >
          <BiArrowFromRight size={30} />
        </button>
      </div>
      <div className="flex text-center mb-4 gap-4 border-b-[1px]">
        <Image
          className="m-auto mb-4"
          alt="User profile"
          width={50}
          height={50}
          src={userDetails.photoURL ? userDetails.photoURL : '/images/defaultAvatar.png'}
        />

        {openNavbar ? (
          <div className="text-left">
            <p className="font-bold">{userDetails.name}</p>
            <p className="text-gray-600">{userDetails.email}</p>
          </div>
        ) : null}
      </div>
      <div className="h-full w-full text-left">
        <nav>
          <ul
            className={`flex flex-col ${
              openNavbar ? 'px-5 items-start ' : 'px-0 items-center'
            }`}
          >
            {userRoles &&
              DASHBOARD_ADMIN_NAV_LINKS.map(
                navlink =>
                  userRoles.includes(navlink.userRole) && (
                    <Link
                      href={navlink.path}
                      className={classNames(
                        ' my-5 cursor-pointer hover:bg-white text-center inline-flex items-center',
                        styles.navlink,
                        currentPath === navlink.path && styles.navLinkActive,
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
