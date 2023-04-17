import LogoApp from '@/components/atoms/LogoApp/LogoApp';
import UserNavDetails from '@/components/molecules/UserNavDetails/UserNavDetails';
import { LogoAppColors } from '@/main.config';
import { LOGO_COLOR } from '@/public/data/homeImages';
import { State } from '@/reducers/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';

const HeaderDashboard: React.FC = () => {
    const userDetails = useSelector((state: State) => state.appUser);

    return (
        <nav className="shadow-md w-full px-0 md:px-20 top-0 z-50 bg-white flex justify-between items-center">
            <LogoApp logoType={LogoAppColors.color} hasLink={true} />
            <div>
                <UserNavDetails user={userDetails} />
            </div>
        </nav>
    );
};

export default HeaderDashboard;
