import { useForm } from 'react-hook-form';
import { Inputs } from '../SignUpForm';

const StepAccountInformation: React.FC = () => {
    const {
        register,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <section>
            <h3 className="mb-5 text-center">Cuéntanos sobre ti</h3>
            <div className="mb-5">
                <label>Nombre *</label>
                <input {...(register('name'), { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <label>Apellido Paterno *</label>
                    <input {...(register('lastname'), { required: true })} />
                    {errors.lastname && <span>This field is required</span>}
                </div>
                <div className="basis-1/2">
                    <label>Apellido Materno *</label>
                    <input {...(register('mother_last_name'), { required: true })} />
                    {errors.mother_last_name && <span>This field is required</span>}
                </div>
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <label>Contraseña*</label>
                    <input
                        type="password"
                        {...(register('password'), { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div className="basis-1/2">
                    <label>Confirmar Contraseña*</label>

                    <input
                        type="password"
                        {...(register('confirmPassword'), { required: true })}
                    />
                    {errors.confirmPassword && <span>This field is required</span>}
                </div>
            </div>
        </section>
    );
};

export default StepAccountInformation;
