import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';

export type LayoutWebProps = {
    children?: React.ReactNode;
};
const LayoutWeb: React.FC<LayoutWebProps> = ({ children }) => {
    return (
        <>
            <HeaderWeb />
            <main>{children}</main>
            <FooterWeb />
        </>
    );
};

export default LayoutWeb;
