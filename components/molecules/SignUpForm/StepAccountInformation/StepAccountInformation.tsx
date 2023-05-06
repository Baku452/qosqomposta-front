import { Controller, useFormContext } from 'react-hook-form';
import { InputsSignUpForm } from '@/types/mainTypes';
import { useContext, useState } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//Styles
import styles from '../signUp.module.scss';
import { FaEye } from 'react-icons/fa';
export interface StepAccountInformationProps {
    increaseStep: () => void;
}
const StepAccountInformation: React.FC<StepAccountInformationProps> = ({
    increaseStep,
}) => {
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useFormContext<InputsSignUpForm>();

    const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (formState) {
            setFormState({
                ...formState,
                [name]: value ?? '',
            });
        } else {
            setFormState({
                [name]: value,
            });
        }
    };

    const handleDateChange = (date: Date) => {
        setFormState({
            ...formState,
            dateBirth: date,
        });
    };

    const onSubmit = (data: any) => {
        console.log(data);
        console.log(errors);
        increaseStep();
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-5 text-center">Cuéntanos sobre ti</h2>
            <div className="mb-5">
                <Controller
                    control={control}
                    name="name"
                    render={() => (
                        <>
                            <label>Nombre *</label>
                            <input
                                value={formState?.name}
                                {...register('name', {
                                    onChange: handleInputChange,
                                })}
                            />
                            {errors.name && (
                                <span className={styles.errorLabel}>
                                    {errors.name.message}
                                </span>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <Controller
                        control={control}
                        name="lastname"
                        render={() => (
                            <>
                                <label>Apellido Paterno *</label>
                                <input
                                    value={formState?.lastname}
                                    {...register('lastname', {
                                        onChange: handleInputChange,
                                    })}
                                />
                                {errors.lastname && (
                                    <span className={styles.errorLabel}>
                                        {errors.lastname.message}
                                    </span>
                                )}
                            </>
                        )}
                    ></Controller>
                </div>
                <div className="basis-1/2">
                    <Controller
                        control={control}
                        name="mother_last_name"
                        render={() => (
                            <>
                                <label>Apellido Materno *</label>
                                <input
                                    value={formState?.mother_last_name}
                                    {...register('mother_last_name', {
                                        onChange: handleInputChange,
                                    })}
                                />
                                {errors.mother_last_name && (
                                    <span className={styles.errorLabel}>
                                        {errors.mother_last_name.message}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </div>
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <Controller
                        control={control}
                        name="email"
                        render={() => (
                            <>
                                <label>Correo Electrónico *</label>
                                <input
                                    type="email"
                                    value={formState?.email}
                                    {...register('email', {
                                        onChange: handleInputChange,
                                    })}
                                />
                                {errors.email && (
                                    <span className={styles.errorLabel}>
                                        {errors.email.message}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </div>
                <div className="basis-1/2">
                    <Controller
                        control={control}
                        name="phoneNumber"
                        render={() => (
                            <>
                                <label>Número de teléfono * </label>
                                <input
                                    value={formState?.phoneNumber}
                                    {...register('phoneNumber', {
                                        onChange: handleInputChange,
                                    })}
                                />
                                {errors.phoneNumber && (
                                    <span className={styles.errorLabel}>
                                        {errors.phoneNumber.message}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </div>
            </div>
            <div className="mb-5 flex gap-5">
                <div className="basis-1/2">
                    <Controller
                        control={control}
                        name="password"
                        render={() => (
                            <>
                                <label>Contraseña*</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formState?.password}
                                    {...register('password', {
                                        onChange: handleInputChange,
                                    })}
                                />
                                <div className="flex justify-start py-2">
                                    <input
                                        className="inline w-4 mr-1"
                                        type="checkbox"
                                        checked={showPassword}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                    <p className="text-sm text-gre">Mostrar contraseña</p>
                                </div>
                                {errors.password && (
                                    <span className={styles.errorLabel}>
                                        {errors.password.message}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </div>
                <div className="basis-1/2">
                    <label>Fecha de nacimiento*</label>
                    <Controller
                        control={control}
                        name="dateBirth"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                selected={formState?.dateBirth}
                                onChange={date => {
                                    date && handleDateChange(date);
                                    field.onChange(date);
                                }}
                                dateFormat="yyyy/MM/dd"
                            />
                        )}
                    />

                    {errors.dateBirth && (
                        <span className={styles.errorLabel}>Este campo es requerido</span>
                    )}
                </div>
            </div>
            <button type="submit" className="btn btn-primary m-auto text-center block">
                Siguiente
            </button>
        </form>
    );
};

export default StepAccountInformation;
