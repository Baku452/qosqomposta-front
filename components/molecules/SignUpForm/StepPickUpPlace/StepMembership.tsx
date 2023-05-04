import MapContainer from '@/components/atoms/MapPicker/MapPicker';
import { useForm } from 'react-hook-form';
import { InputsSignUpForm } from '@/types/mainTypes';

const StepPickupPlace: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useForm<InputsSignUpForm>();

    return (
        <section>
            <h2>Ingrese datos para el recojo</h2>
            <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>
            <MapContainer />
            <div className="mb-5 mt-5">
                <label>Referencia del lugar *</label>
                <input {...(register('referencePlace'), { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
        </section>
    );
};

export default StepPickupPlace;
