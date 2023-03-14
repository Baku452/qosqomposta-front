import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ImageSlider from '@/components/atoms/ImageSlider/ImageSlider';
import { IMAGES_SLIDER, LOGO_COLOR } from '@/public/data/homeImages';

const DescriptionWeb: React.FC = () => {
    interface Counter {
        id: string;
        count: number;
        interval: number;
        visible: boolean;
        maxValue: number;
    }
    const [counters, setCounters] = useState<Counter[]>([
        { id: 'counterHouse', count: 0, interval: 100, visible: false, maxValue: 190 },
    ]);

    return (
        <>
            <section className="container max-w-sm lg:max-w-6xl mx-auto pt-20 lg:pt-80 px-5 lg:px-0">
                <h2 className="text-xl lg:text-4xl text-center">
                    Junta los residuos orgánicos y nosotros lo{' '}
                    <span className="text-yellowQ">qompostamos</span>
                </h2>

                <h2 className="text-lg lg:text-3xl text-center font-paragraph pt-5">
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
            <section className="container max-w-6xl mx-auto pt-20">
                <h2 className="text-xl lg:text-4xl text-center">
                    Te damos la bienvenida <br />
                    <span className="text-yellowQ">Movimiento Qompostero !</span>
                </h2>
                <div className="flex flex-col lg:flex-row px-20 justify-center items-center">
                    <p className="basis-1/2 text-center text-xl">
                        El compostaje es un proceso natural que recicla materia orgánica y
                        la convierte en abono para enriquecer el suelo y las plantas.
                        Compostar reduce más de la mitad de los residuos que terminan en
                        vertederos, promueve el cuidado de áreas verdes y permite producir
                        alimentos de calidad. ¡Únete a nosotros para llenar el Cusco de
                        compost y hacer una diferencia positiva en el medio ambiente!
                    </p>
                    <div className="block">
                        <Image
                            width={500}
                            height={500}
                            alt="Logo Qosqomposta"
                            src={LOGO_COLOR}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default DescriptionWeb;
