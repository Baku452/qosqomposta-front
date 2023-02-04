import FooterWeb from '@/organism/footerWeb/FooterWeb';
import HeaderWeb from '@/components/organism/headerWeb/HeaderWeb';

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
