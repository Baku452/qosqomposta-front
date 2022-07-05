import Image from 'next/image';

const BannerLanding = () => {
  return (
    <div className="relative">
      <div className="relative lg:absolute h-full w-2/6 bg-gradient-to-r from-black" />
      <div className="animate-slideIn font-bold z-30 px-20 py-5 xl:py-24 mx-auto inset-x-0 absolute text-white">
        <div className="w-100 xl:max-w-2xl text-center xl:text-left ">
          <h1 className="uppercase text-base xl:text-7xl py-5 lg:py-14">
            <span className="text-yellowQ">Composta</span> <br /> Por un Cusco sostenible
          </h1>
          <p className="text-2xl font-normal leading-normal">
            Suscríbete desde S/10 soles al Mes
          </p>
        </div>

        <div className="btn btn-primary my-12 transition ease-in-out shadow-2xl hover:text-black text-center md:!w-64 xl:!w-fit m-auto xl:m-0">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqooaViePpe84wgvXvs2zYubLUz5MaAoQWldChauBwvs9RHg/viewform"
            rel="noreferrer"
          >
            Qomposta Ya !
          </a>
        </div>
      </div>
      <div className="h-screen">
        <Image
          className="-z-50 backdrop-opacity-70 object-cover w-auto h-full"
          // width={1900}
          // height={1000}
          layout="fill"
          alt="bannerQosqomposta"
          src="https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1656998916/web-home/bannerQ2_akpo4g.jpg"

          // src="https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1656951925/web-home/banner_cwrtkf.jpg"
        />
      </div>
    </div>
  );
};

export { BannerLanding };
