import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

const AuthHeader: React.FC = () => {
  return (
    <nav className="w-full shadow-md mt-0 mx-auto p-5">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <div>
          <Link href="/">
            <a>
              <Image
                width={180}
                height={70}
                alt="Logo Qosqomposta"
                src="/icons/blackLogo.svg"
              />
            </a>
          </Link>
        </div>
        <div className="before:md:block">
          <button className="text-black px-10">
            <a target="blank" href="https://wa.link/yagfmk">
              <BsWhatsapp className="inline mr-2" />
              Comúnicate con nosotros !
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthHeader;
