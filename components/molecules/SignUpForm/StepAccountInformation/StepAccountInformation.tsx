import { Controller, useFormContext } from 'react-hook-form';
import { InputsSignUpForm } from '@/types/mainTypes';
import { useContext } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StepAccountInformation: React.FC = () => {
    const {
        control,
        register,
        formState: { errors },
    } = useFormContext<InputsSignUpForm>();

    const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleDateChange = (date: Date) => {
        setFormState({
            ...formState,
            dateBirth: date,
        });
    };
    return (
        <form>
            <h3 className="mb-5 text-center">Cuéntanos sobre ti</h3>
            <div className="mb-5">
                <label>Nombre *</label>
                <input
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    {...(register('name'), { required: true })}
                />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <label>Apellido Paterno *</label>
                    <input
                        name="lastname"
                        onChange={handleInputChange}
                        {...(register('lastname'), { required: true })}
                    />
                    {errors.lastname && <span>This field is required</span>}
                </div>
                <div className="basis-1/2">
                    <label>Apellido Materno *</label>
                    <input
                        name="mother_last_name"
                        onChange={handleInputChange}
                        {...(register('mother_last_name'), { required: true })}
                    />
                    {errors.mother_last_name && <span>This field is required</span>}
                </div>
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <label>Contraseña*</label>
                    <input
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                        {...(register('password'), { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div className="basis-1/2">
                    <label>Fecha de nacimiento*</label>
                    <Controller
                        control={control}
                        name="dateBirth"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                // {...field}
                                selected={formState.dateBirth}
                                onChange={date => {
                                    date && handleDateChange(date);
                                    field.onChange(date);
                                }}
                                dateFormat="yyyy/MM/dd"
                            />
                        )}
                    />

                    {errors.dateBirth && <span>This field is required</span>}
                </div>
            </div>
        </form>
    );
};

export default StepAccountInformation;
