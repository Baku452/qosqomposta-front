import PlanFamiliar from './PlanFamiliar/PlanFamiliar';
import PlanComercial from './PlanComercial/PlanComercial';

const OurServices = () => {
    return (
        <section className="py-10 max-w-6xl m-auto">
            <div className="container mx-auto ">
                <div className="mb-5">
                    <h2 className="text-center text-xl text-greenQ lg:text-4xl title mb-5">
                        Sé parte del cambio{' '}
                    </h2>
                    <h3 className="font-regular font-paragraph text-center text-xl">
                        ¡Descubre nuestros planes de recolección y acopio en Cusco! <br />
                        ¡Elige el más adecuado para tu hogar o tu empresa!
                    </h3>
                </div>
                <div className="flex">
                    <PlanFamiliar />
                    <PlanComercial />
                </div>
            </div>
        </section>
    );
};

export default OurServices;
