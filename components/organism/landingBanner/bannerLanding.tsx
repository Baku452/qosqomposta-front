import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/image';
import Link from 'next/link';

const BannerLanding = () => {
  return (
    <div className="relative">
      <div className="font-bold z-30 px-5 md:px-20 py-20 xl:py-24 mx-auto inset-x-0 absolute text-white">
        <div className="w-100 text-center">
          <h1 className="uppercase text-4xl lg:text-5xl xl:text-7xl py-5 lg:py-8">
            <span className="text-yellowQ">Qosqomposta</span> <br />
            <span className="text-2xl">Por un Cusco sostenible</span>
          </h1>
          <button className="btn btn-primary">
            <Link href={'/'}>Únete Ya</Link>
          </button>
        </div>
      </div>
      <div className="h-[calc(100vh_-_19rem)]">
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