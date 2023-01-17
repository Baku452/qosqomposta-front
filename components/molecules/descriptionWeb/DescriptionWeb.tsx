const DescriptionWeb: React.FC = () => {
  return (
    <>
      <section className="container max-w-6xl mx-auto py-20">
        <h2 className="text-xl lg:text-4xl text-center ">
          Junta los residuos orgánicos y nosotros lo{' '}
          <span className="text-yellowQ">qompostamos</span>
        </h2>
        <h3 className="py-8">¡Juntos por un Cusco sostenible!</h3>
        <p className="pt-4 text-xl">
          ¿Sabías que nosotros tenemos diferentes servicios? Como empresa ecoamigable, nos
          gusta la idea de crear todo un ecosistema de productos y servicios verdes 💚.
          Por tal motivo ofrecemos diferentes servicios como: la Tiendita Q, el reciclaje,
          el compostaje y nuestro más moderno servicio de taller de compostaje
        </p>
      </section>
      <section className=" bg-gray-200 container py-2">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl py-10">
            Por un 2022 lleno de
            <span className="text-yellowQ"> compost !</span>
          </h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="text-center pb-5">
              <h3 className="font-['eveleth'] text-2xl lg:text-6xl text-brownQ">
                35 838 KG{' '}
              </h3>
              <h4 className="text-lg lg:text-2xl pt-2 lg:pt-5">
                De residuos orgánicos netos para compostar
              </h4>
            </div>
            <div className="text-center pb-5">
              <h3 className="font-['eveleth'] text-2xl lg:text-6xl text-brownQ">+190</h3>
              <h4 className="text-lg lg:text-2xl pt-2 lg:pt-5">Familias composteras</h4>
            </div>
            <div className="text-center pb-5">
              <h3 className="font-['eveleth'] text-2xl lg:text-6xl text-brownQ">
                +2 años
              </h3>
              <h4 className="text-lg lg:text-2xl pt-2 lg:pt-5">
                haciendo un Cusco sostenible
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionWeb;
