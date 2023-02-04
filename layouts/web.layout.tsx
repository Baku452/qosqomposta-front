import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';

const LayoutWeb = ({ children }) => {
    return (
        <>
            <HeaderWeb />
            <main>{children}</main>
            <FooterWeb />
        </>
    );
};

export default LayoutWeb;
