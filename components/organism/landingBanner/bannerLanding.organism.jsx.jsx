import Image from 'next/image';

const BannerLanding = () => {
  return (
    <div className="relative">
      <div className="absolute h-full w-2/6 bg-gradient-to-r from-black" />
      <div className="animate-slideIn font-bold z-30 px-20 py-24 mx-auto inset-x-0 absolute text-white">
        {/* <div className="text-4xl ">Únete al movimiento Qosmpostero</div> */}
        <div className="max-w-2xl ">
          <h1 className="uppercase text-xl lg:text-7xl 2xl:text-7xl py-14">
            <span className="text-yellowQ">Qosqomposta</span> <br /> Por un Cusco
            sostenible
          </h1>
          <h2 className="text-3xl font-normal leading-normal">
            Junta los residuos orgánicos <br />
            Nosotros lo <span className="text-yellowQ">compostamos</span>
          </h2>
          <p className="text-2xl font-normal leading-normal">
            Suscríbete desde S/10 soles al Mes
          </p>
        </div>

        <div className="btn btn-primary my-12 transition ease-in-out">Qomposta Ya !</div>
      </div>
      <Image
        className="-z-50 backdrop-opacity-70"
        width={1900}
        height={1000}
        layout="responsive"
        alt="bannerQosqomposta"
        src="/images/banner.jpg"
      />
    </div>
  );
};

export { BannerLanding };
