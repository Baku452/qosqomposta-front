/* eslint-disable @next/next/no-img-element */
import { LOGO_ONLY_CONDOR_WHITE } from '@/public/icons/iconsConfig';
import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/image';

const BannerLanding = () => {
    return (
        <div className="h-[calc(100vh_-_19rem)] relative d-flex">
            <div className="h-full lg:h-auto absolute text-white w-full lg:w-5/12 text-center px-5 lg:px-10 lg:-translate-y-2/4 lg:top-1/2 m-0">
                <h1 className="text-3xl md:text-5xl lg:text-6xl">
                    Hagamos un cambio significativo
                    <span className="hidden">Qosqomposta, por un cusco sostenible</span>
                </h1>
                <h2 className="text-2xl block lg:hidden">Juntos!</h2>
                <div className="hidden lg:flex flex-col lg:flex-row  items-start lg:items-center justify-center">
                    <div className="order-2 w-24">
                        <Image
                            width={141}
                            height={141}
                            src={LOGO_ONLY_CONDOR_WHITE}
                            alt="Logo Qosqomposta"
                        />
                    </div>
                    <h2 className="lg:text-5xl -order-1 lg:order-1 hidden lg:block">
                        Juntos!
                    </h2>
                    <h2 className="!font-normal !font-paragraph text-xl">
                        Juntos hacia un futuro sostenible. ¡Fomentamos la reducción de
                        residuos! Haz tu pedido hoy mismo.
                    </h2>
                </div>
            </div>
            <img
                className="-z-50 object-cover w-full h-[calc(100vh_-_15rem)] overflow-visible"
                alt="bannerQosqomposta"
                src={WEB_BANNER_URL}
            />
        </div>
    );
};

export default BannerLanding;
