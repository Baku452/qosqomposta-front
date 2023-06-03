import LogoApp from '@/components/atoms/LogoApp/LogoApp';
import LogoutButton from '@/components/atoms/LogoutButton/LogoutButton';
import { LogoAppColors, ONLY_LOGO_BLACK_LINES, ValidRoles } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { DASHBOARD_ADMIN_NAV_LINKS } from '@/utils/navUtils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiArrowFromRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const DashboardAside: React.FC = () => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const userDetails = useSelector((state: State) => state.appUser);

  return (
    <section
      className={`bg-white h-screen shadow-lg transition-all flex flex-col  items-center  py-5 px-5 ${
        isOpen ? 'w-[15rem]' : 'w-[5rem]'
      }`}
    >
      <div className={`flex mb-5 ${isOpen ? 'self-end' : 'self-center'}`}>
        <button
          className={`transition-transform ${isOpen ? 'rotate-0 ' : 'rotate-180'}`}
          onClick={() => setIsOpen(value => !value)}
        >
          <BiArrowFromRight size={30} />
        </button>
      </div>
      {/* <div className="text-center">
        {isOpen ? (
          <LogoApp width={180} logoType={LogoAppColors.color} hasLink={true} />
        ) : (
          <Image
            width={80}
            height={80}
            alt="Logo Qosqomposta"
            src={ONLY_LOGO_BLACK_LINES}
          />
        )}
      </div> */}
      <div className="text-center mb-4">
        <Image
          className="m-auto mb-4"
          alt="User profile"
          width={100}
          height={100}
          src={
            userDetails.photoURL !== ''
              ? userDetails.photoURL
              : '/images/defaultAvatar.png'
          }
        />
        {isOpen ? (
          <div className="text-center">
            <p className="font-bold">{userDetails.name}</p>
            <p className="text-gray-600">{userDetails.email}</p>
          </div>
        ) : null}
      </div>
      <div className="h-full justify-between">
        <nav>
          <ul
            className={`flex flex-col ${
              isOpen ? 'px-5 items-start ' : 'px-0 items-center'
            }`}
          >
            {userRoles &&
              userRoles?.includes(ValidRoles.ADMIN) &&
              DASHBOARD_ADMIN_NAV_LINKS.map(navlink => (
                <Link
                  href={navlink.path}
                  className="my-5 cursor-pointer hover:bg-white text-center flex items-center"
                  key={navlink.key}
                >
                  {navlink.icon}
                  {isOpen ? <span className="ml-3">{navlink.name}</span> : null}
                </Link>
              ))}
          </ul>
        </nav>
      </div>
      <div className="justify-self-end">
        <LogoutButton isOpenAside={isOpen} />
      </div>
    </section>
  );
};

export default DashboardAside;
