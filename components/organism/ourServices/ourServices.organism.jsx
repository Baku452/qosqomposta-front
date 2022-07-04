import { ServicesQB2C, ServicesQB2B } from 'public/data/servicesQ';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';

const OurServices = () => {
  return (
    <>
      <section className="bg-gray-200 py-24 px-6">
        <div className="container mx-auto ">
          <h2 className="text-center text-4xl title">Planes Individuales</h2>
          <div className="h-1 mx-auto bg-yellowQ w-24  mt-4 rounded"></div>
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center max-w-full md:max-w-6xl my-3 md:px-8">
              {ServicesQB2C &&
                ServicesQB2C.map(item => (
                  <>
                    <div
                      className="bg-white overflow-auto rounded-lg shadow-lg w-11/12 max-w-sm sm:w-3/5 lg:w-1/3"
                      key={item.id}
                    >
                      {item.featured ? (
                        <div className="bg-greenQ p-3 font-bold text-white text-center">
                          MÁS DESTACADO
                        </div>
                      ) : null}
                      <div className="p-9 ">
                        <div className="text-center pb-5">
                          <h3 className="font-bold uppercase text-lg mb-4">
                            {item.title}
                          </h3>
                          <p
                            className={`${item.featured ? 'text-2xl' : ''} text-gray-500`}
                          >
                            {item.price !== 0 ? `Desde S/." ${item.price}` : 'Gratis'}
                          </p>
                        </div>
                        <div className="pb-10">
                          <p>{item.description}</p>
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
                        <button className="w- btn btn-primary mx-auto text-center">
                          Inscribete
                        </button>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex container items-center m-auto">
        <div className="p-10 z-20 text-black max-w-3xl text-right basis-auto px-20">
          <h2 className="text-xl rounded md:text-7xl title  uppercase pt-10 pb-20">
            Tenemos planes comerciales
          </h2>
          <p className="text-lg md:text-2xl mr-0 ">
            Comienza tu camino a la sostenibilidad y posiciónate como una empresa social y
            ambientalmente responsable
          </p>
          <h3 className="font-bold text-greenQ uppercase text-4xl pt-10 pb-5">
            Servicios
          </h3>
          {ServicesQB2B.map(item => (
            <div className="text-lg flex justify-end items-center" key={item.title}>
              <AiOutlineCheck key={item.title} color="#1c7e39" />
              <p className="w-max ml-3">{item.title}</p>
            </div>
          ))}
          <button className="btn btn-primary mx-auto text-center mt-10">
            Comienza ahora
          </button>
        </div>
        <div className="basis-auto">
          <Image
            alt="heroQ"
            width={705}
            height={940}
            layout="fixed"
            src="/images/landingBalde.jpg"
          />
        </div>
      </section>
    </>
  );
};

export { OurServices };
