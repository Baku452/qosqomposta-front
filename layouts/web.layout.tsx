import {
    QosqompostaServicesContext,
    initialStateServices,
} from '@/context/ServicesContext';
import FooterWeb from '@/organism/FooterWeb/FooterWeb';
import HeaderWeb from '@/organism/HeaderWeb/HeaderWeb';

export type LayoutWebProps = {
    children?: React.ReactNode;
};
const LayoutWeb: React.FC<LayoutWebProps> = ({ children }) => {
    return (
        <>
            <QosqompostaServicesContext.Provider value={initialStateServices}>
                <HeaderWeb />
                <main>{children}</main>
                <FooterWeb />
            </QosqompostaServicesContext.Provider>
        </>
    );
};

export default LayoutWeb;
