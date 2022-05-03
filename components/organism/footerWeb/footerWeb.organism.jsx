import Image from 'next/image';
import Link from 'next/link';

const FooterWeb = () => {
  return (
    <footer className="w-full flex flex-col bg-black text-white text-center py-20">
      <div className="w-full basis-full flex justify-center">
        <Link href="/">
          <a>
            <Image
              className="mb-10"
              width={464}
              height={100}
              alt="Logo Qosqomposta"
              src="/icons/whiteLogo.svg"
            />
          </a>
        </Link>
      </div>
      <p>© 2022 Qosqomposta. Todos los derechos reservados</p>
    </footer>
  );
};

export { FooterWeb };
