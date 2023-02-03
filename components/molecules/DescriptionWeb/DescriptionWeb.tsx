import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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

    const intervalIdsRef = useRef<NodeJS.Timeout[]>([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCounters(counters =>
                        counters.map(counter => {
                            if (counter.id === entry.target.id) {
                                return { ...counter, visible: true };
                            }
                            return counter;
                        }),
                    );
                } else {
                    setCounters(counters =>
                        counters.map(counter => {
                            if (counter.id === entry.target.id) {
                                return { ...counter, visible: false };
                            }
                            return counter;
                        }),
                    );
                }
            });
        });

        refs.current.forEach(ref => observer.observe(ref));

        return () => {
            refs.current.forEach(ref => observer.unobserve(ref));
        };
    }, []);

    useEffect(() => {
        counters
            .filter(counter => counter.visible)
            .forEach(counter => {
                const intervalId = setInterval(() => {
                    if (counter.count < counter.maxValue) {
                        setCounters(counters =>
                            counters.map(c => {
                                if (c.id === counter.id && c.count < c.maxValue) {
                                    return { ...c, count: c.count + 1 };
                                }
                                return c;
                            }),
                        );
                    } else {
                        clearInterval(intervalId);
                    }
                }, counter.interval);
                intervalIdsRef.current.push(intervalId);
            });
    }, [counters]);
    return (
        <>
            <section className="container max-w-sm lg:max-w-6xl mx-auto py-20 px-5 lg:px-0">
                <h2 className="text-xl lg:text-4xl text-center">
                    Junta los residuos orgánicos y nosotros lo{' '}
                    <span className="text-yellowQ">qompostamos</span>
                </h2>
                <h3 className="py-8">¡Juntos por un Cusco sostenible!</h3>
                <p className="pt-4 text-xl">
                    ¿Sabías que nosotros tenemos diferentes servicios? Como empresa
                    ecoamigable, nos gusta la idea de crear todo un ecosistema de
                    productos y servicios verdes 💚. Por tal motivo ofrecemos diferentes
                    servicios como: la Tiendita Q, el reciclaje, el compostaje y nuestro
                    más moderno servicio de taller de compostaje
                </p>
            </section>
            <section className=" bg-gray-200 w-full py-2">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-xl lg:text-4xl text-center lg:text-left py-10 px-5 lg:px-0">
                        Por un {new Date().getFullYear()} lleno de
                        <span className="text-yellowQ"> compost !</span>
                    </h2>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="text-center pb-5">
                            <Image
                                width={56}
                                height={58}
                                alt="Logo Qosqomposta"
                                src="/icons/plant-fill.svg"
                            />
                            <h3
                                id="counterKG"
                                className="font-['eveleth'] text-2xl lg:text-4xl text-brownQ"
                            >
                                35838 KG{' '}
                            </h3>
                            <h4 className="text-lg lg:text-2xl pt-2 lg:pt-5">
                                De residuos orgánicos para compostar
                            </h4>
                        </div>
                        <div className="text-center pb-5">
                            <Image
                                width={56}
                                height={58}
                                alt="Logo Qosqomposta"
                                src="/icons/house-account.svg"
                            />
                            <h3
                                id="counterHouse"
                                className="font-['eveleth'] text-2xl lg:text-4xl text-brownQ"
                                ref={el => (refs.current[0] = el)}
                            >
                                +{counters[0].count}
                            </h3>
                            <h4 className="text-lg lg:text-2xl pt-2 lg:pt-5">
                                Familias composteras
                            </h4>
                        </div>
                        <div className="text-center pb-5">
                            <Image
                                width={56}
                                height={58}
                                alt="Logo Qosqomposta"
                                src="/icons/mountain.svg"
                            />
                            <h3
                                id="counterYears"
                                className="font-['eveleth'] text-2xl lg:text-4xl text-brownQ"
                            >
                                +{new Date().getFullYear() - 2020} años
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
