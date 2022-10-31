import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

const AuthHeader: React.FC = () => {
  return (
    <nav>
      <div className="flex justify-between w-full md:max-w-7xl m-auto p-10 items-center">
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
        <button className="text-white px-10">
          <a target="blank" href="https://wa.link/yagfmk">
            <BsWhatsapp className="inline mr-2" />
            Comúnicate con nosotros !
          </a>
        </button>
      </div>
    </nav>
  );
};

export default AuthHeader;
