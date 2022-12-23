import { ServicesQB2C, ServicesQB2B } from 'public/data/servicesQ';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdOutlineAddBusiness } from 'react-icons/md';
import Image from 'next/image';
import styles from './ourServices.styles.module.scss';

const OurServices = () => {
  return (
    <>
      <section className="bg-gray-200 py-10 md:py-24 px-6">
        <div className="container mx-auto ">
          <h2 className="text-center text-3xl title mb-5">
            Únete al movimiento Compostero{' '}
          </h2>
          <div className="h-1 mx-auto bg-yellowQ w-24 mb-10 mt-4 rounded"></div>
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div
              className={`${styles.serviceQosqomposta} flex flex-col lg:flex-row justify-center items-center max-w-full md:max-w-6xl my-3 md:px-8`}
            >
              {ServicesQB2C &&
                ServicesQB2C.map(item => (
                  <div
                    className="bg-white overflow-auto rounded-lg shadow-lg w-11/12 max-w-sm xl:w-1/3 mb-5"
                    key={item.id}
                  >
                    {item.featured ? (
                      <div className="bg-greenQ p-3 font-bold text-white text-center">
                        MÁS DESTACADO
                      </div>
                    ) : null}
                    <div className="p-9 ">
                      <div className="text-center pb-5">
                        <h3 className="font-bold uppercase text-lg mb-4">{item.title}</h3>
                        <p className={`${item.featured ? 'text-2xl' : ''} text-gray-500`}>
                          {item.price !== 0 ? `S/. ${item.price}` : 'Gratis'}
                        </p>
                      </div>
                      <div className="pb-10">
                        <p>{item.description}</p>
                        <h4 className="font-bold pt-4 pb-3">Incluye</h4>
                        {item.included ? (
                          <ul>
                            {item.included.map(object => (
                              <li className="flex items-center" key={object}>
                                <AiOutlineCheck color="#1c7e39" />
                                {object}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdqooaViePpe84wgvXvs2zYubLUz5MaAoQWldChauBwvs9RHg/viewform"
                        className="w-full block self-center btn btn-primary mx-auto text-center"
                      >
                        Inscribete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex container items-center m-auto">
        <div className="p-10 z-20 text-black max-w-3xl text-center md:text-right basis-auto px-5 lg:px-20">
          <h2 className="text-3xl rounded md:text-7xl title  uppercase pt-10 pb-20">
            Nuestros Planes comerciales
          </h2>
          <p className="text-lg md:text-2xl mr-0 ">
            Comienza tu camino a la sostenibilidad y posiciónate como una empresa social y
            ambientalmente responsable
          </p>
          <h3 className="font-bold text-greenQ uppercase text-xl lg:text-4xl pt-10 pb-5">
            Servicios
          </h3>
          {ServicesQB2B.map(item => (
            <div
              className="text-lg flex justify-center lg:justify-end items-center"
              key={item.title}
            >
              <AiOutlineCheck key={item.title} color="#1c7e39" />
              <p className="w-max  ml-2">{item.title}</p>
            </div>
          ))}
          <button className="btn btn-primary mx-auto text-center mt-10">
            Comienza ahora
          </button>
        </div>
        <div className="basis-auto w-full xl:block hidden ">
          <Image
            alt="heroQ"
            width={705}
            height={940}
            layout="responsive"
            src="https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1656951925/web-home/landingBalde_mc3mgn.jpg"
          />
        </div>
      </section>
    </>
  );
};

export { OurServices };
