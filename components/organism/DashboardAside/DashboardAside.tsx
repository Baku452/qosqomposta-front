import { ValidRoles } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { DASHBOARD_ADMIN_NAV_LINKS } from '@/utils/navUtils';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const DashboardAside: React.FC = () => {
  const userRoles = useSelector((state: State) => state.appUser.roles);
  return (
    <nav className="h-screen bg-gray-200 max-w-[15rem] py-10 pl-10">
      <ul
        className="flex flex-col items-center
            "
      >
        {userRoles &&
          userRoles?.includes(ValidRoles.ADMIN) &&
          DASHBOARD_ADMIN_NAV_LINKS.map(navlink => (
            <Link
              href={navlink.path}
              className="my-5 cursor-pointer hover:bg-white text-center py-5 rounded-l-xl pr-10 w-full transition"
              key={navlink.key}
            >
              {navlink.name}
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default DashboardAside;
