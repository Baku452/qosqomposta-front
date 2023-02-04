import { WEB_BANNER_URL } from 'main.config';
import Image from 'next/image';
import Link from 'next/link';

const BannerLanding = () => {
    return (
        <div className="relative">
            <div className="h-[calc(100vh_-_19rem)]">
                <div className="font-bold z-30 px-5 md:px-20 mx-auto inset-x-0 absolute text-white h-full flex items-center flex-row justify-center">
                    <div className="w-100 text-center">
                        <h1 className="uppercase text-4xl lg:text-5xl xl:text-7xl">
                            <span className="text-yellowQ">Qosqomposta</span> <br />
                            <span className="text-2xl">Por un Cusco sostenible !</span>
                        </h1>
                        <button className="btn btn-primary">
                            <Link href={'/'}>Únete Ya</Link>
                        </button>
                    </div>
                </div>
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
