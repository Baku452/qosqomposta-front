import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/image';

const BannerLanding = () => {
  return (
    <div className="relative">
      <div className="translate-y-1/2 animate-slideIn font-bold z-30 px-0 md:px-20 py-5 xl:py-24 mx-auto inset-x-0 absolute text-white">
        <div className="w-100 text-center">
          <h1 className="uppercase text-base xl:text-7xl py-5 lg:py-8">
            <span className="text-yellowQ">Qosqomposta</span> <br />
            <span className="text-4xl">Por un Cusco sostenible</span>
          </h1>
        </div>
      </div>
      <div className="h-screen">
        <Image
          className="-z-50 backdrop-opacity-70 object-cover w-auto h-full"
          layout="fill"
          alt="bannerQosqomposta"
          src={WEB_BANNER_URL}
        />
      </div>
    </div>
  );
};

export default BannerLanding;
