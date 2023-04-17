import LogoApp from '@/components/atoms/LogoApp/LogoApp';
import UserNavDetails from '@/components/molecules/UserNavDetails/UserNavDetails';
import { LogoAppColors } from '@/main.config';
import { LOGO_COLOR } from '@/public/data/homeImages';
import { State } from '@/reducers/rootReducer';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const HeaderDashboard: React.FC = () => {
    const [showUserDetails, setShowUserDetails] = useState<boolean>(false);

    const userLogged = Cookies.get('user_token');
    const userDetails = useSelector((state: State) => state.appUser);

    useEffect(() => {
        userLogged && setShowUserDetails;
    }, [userLogged]);

    return (
        <nav className="shadow-md w-full px-0 md:px-20 top-0 z-50 bg-black">
            <LogoApp logoType={LogoAppColors.white} hasLink={true} />
            {showUserDetails && <UserNavDetails user={userDetails} />}
        </nav>
    );
};

export default HeaderDashboard;
