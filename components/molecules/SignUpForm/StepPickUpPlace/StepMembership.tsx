import MapContainer from '@/components/atoms/MapPicker/MapPicker';

const StepPickupPlace: React.FC = () => {
    return (
        <section>
            <h2>Ingrese datos para el recojo</h2>
            <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>
            <MapContainer />
        </section>
    );
};

export default StepPickupPlace;
