/* eslint-disable @next/next/no-img-element */
import { LOGO_ONLY_CONDOR_WHITE } from '@/public/icons/iconsConfig';
import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/image';

const BannerLanding = () => {
    return (
        <div className="h-[calc(100vh_-_19rem)] relative d-flex">
            <div className="absolute text-white w-5/12 text-center px-10 -translate-y-2/4 top-1/2 m-0">
                <h1 className="text-6xl">
                    Hagamos un cambio significativo
                    <span className="hidden">Qosqomposta, por un cusco sostenible</span>
                </h1>
                <div className="flex items-center justify-center">
                    <Image
                        width={141}
                        height={141}
                        src={LOGO_ONLY_CONDOR_WHITE}
                        alt="Logo Qosqomposta"
                    />
                    <h2 className="text-5xl">Juntos!</h2>
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
