/* eslint-disable @next/next/no-img-element */
import { LOGO_ONLY_CONDOR_WHITE } from '@/public/icons/iconsConfig';
import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/legacy/image';

const BannerLanding = () => {
  return (
    <div className="d-flex relative h-[calc(100vh_-_19rem)]">
      <div className="absolute m-0 h-full w-full px-5 text-center text-white lg:top-1/2 lg:h-auto lg:w-5/12 lg:-translate-y-2/4 lg:px-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          Hagamos un cambio significativo
          <span className="hidden">Qosqomposta, por un cusco sostenible</span>
        </h1>
        <h2 className="block text-2xl lg:hidden">Juntos!</h2>
        <div className="hidden flex-col items-start justify-center lg:flex lg:flex-row lg:items-center">
          <div className="order-2 ml-4 w-24">
            <Image
              width={141}
              height={141}
              src={LOGO_ONLY_CONDOR_WHITE}
              alt="Logo Qosqomposta"
            />
          </div>
          <h2 className="-order-1 hidden font-paragraph lg:order-1 lg:block lg:text-5xl">
            Juntos!
          </h2>
        </div>
      </div>
      <img
        className="-z-50 h-[calc(100vh_-_15rem)] w-full overflow-visible object-cover"
        alt="bannerQosqomposta"
        src={WEB_BANNER_URL}
      />
    </div>
  );
};

export default BannerLanding;
