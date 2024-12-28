import Image from 'next/legacy/image';
import ImageSlider from '@/components/atoms/ImageSlider/ImageSlider';
import { IMAGES_SLIDER, LOGO_COLOR } from '@/public/data/homeImages';

const DescriptionWeb: React.FC = () => {
  return (
    <>
      <section className="container mx-auto max-w-sm px-5 pt-20 lg:max-w-6xl lg:px-0 lg:pt-80">
        <h2 className="text-center text-xl lg:text-4xl">
          Junta los residuos orgánicos y nosotros lo{' '}
          <span className="text-yellowQ">qompostamos</span>
        </h2>

        <h2 className="pt-5 text-center font-paragraph text-lg lg:text-3xl">
          Esta realidad puede cambiar...
        </h2>
      </section>
      <section className="pt-10">
        <ImageSlider
          images={IMAGES_SLIDER}
          arrowColor={'#F2BE12'}
          arrowSize={50}
          width={1200}
          height={600}
          borderRadius={true}
        />
      </section>
      <section className="container mx-auto max-w-6xl pt-20">
        <h2 className="text-center text-xl lg:text-4xl">
          Te damos la bienvenida <br />
          <span className="text-yellowQ">Movimiento Qompostero !</span>
        </h2>
        <div className="flex flex-col items-center justify-center px-20 lg:flex-row">
          <p className="basis-1/2 text-center text-xl">
            El compostaje es un proceso natural que recicla materia orgánica y la
            convierte en abono para enriquecer el suelo y las plantas. Compostar reduce
            más de la mitad de los residuos que terminan en vertederos, promueve el
            cuidado de áreas verdes y permite producir alimentos de calidad. ¡Únete a
            nosotros para llenar el Cusco de compost y hacer una diferencia positiva en el
            medio ambiente!
          </p>
          <div className="block">
            <Image width={500} height={500} alt="Logo Qosqomposta" src={LOGO_COLOR} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionWeb;
