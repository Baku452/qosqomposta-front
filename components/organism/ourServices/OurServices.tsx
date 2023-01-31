import PlanFamiliar from './PlanFamiliar/PlanFamiliar';
import PlanComercial from './PlanComercial/PlanComercial';

const OurServices = () => {
    return (
        <section className="py-10 max-w-6xl m-auto">
            <div className="container mx-auto ">
                <h2 className="text-center text-3xl title mb-5">
                    Únete al movimiento Compostero{' '}
                </h2>
                <div className="h-1 mx-auto bg-yellowQ w-24 mb-10 mt-4 rounded" />
                <PlanFamiliar />
                <PlanComercial />
            </div>
        </section>
    );
};

export default OurServices;
