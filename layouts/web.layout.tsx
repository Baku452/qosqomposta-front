import FooterWeb from '@/components/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/components/organism/HeaderWeb/HeaderWeb';

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
