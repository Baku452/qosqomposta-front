import Image from 'next/image';
import Link from 'next/link';

const HeaderWeb = () => {
  return (
    <nav className="bg-gradient-to-b absolute w-full p-t5 px-20 top-0 z-50 from-black">
      <Link href="/">
        <a>
          <Image
            width={180}
            height={70}
            alt="Logo Qosqomposta"
            src="/icons/whiteLogo.svg"
          />
        </a>
      </Link>
    </nav>
  );
};

export { HeaderWeb };
