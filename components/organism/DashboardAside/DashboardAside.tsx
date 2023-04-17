import { DASHBOARD_ADMIN_NAV_LINKS } from '@/utils/navUtils';

const DashboardAside: React.FC = () => {
    return (
        <nav className="h-screen bg-gray-200 max-w-[15rem] py-10 pl-10">
            <ul
                className="flex flex-col items-center
            "
            >
                {DASHBOARD_ADMIN_NAV_LINKS.map(navlink => (
                    <li
                        className="my-5 cursor-pointer hover:bg-white text-center py-5 rounded-l-xl pr-10 w-full transition"
                        key={navlink.key}
                    >
                        {navlink.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DashboardAside;
