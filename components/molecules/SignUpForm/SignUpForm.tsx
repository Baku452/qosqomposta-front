import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//Styles
import styles from './signUp.module.scss';

type Inputs = {
    name: string;
    lastname: string;
    mother_last_name: string;
    password: string;
    confirmPassword: string;
    email: string;
    address: string;
    dateBirth: Date;
    membership: string;
    phoneNumber: string;
};

const SignUpForm: React.FC = () => {
    const [stepsForm, setSetpsForm] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div>
            <StepsForm stepActive={stepsForm} setStep={setSetpsForm} />
            <div className="shadow-xl rounded-xl p-10 max-w-3xl m-auto bg-white text-left text-gray-400">
                <form
                    className={`m-auto w-11/12 ${styles.formSignUp}`}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {stepsForm === 0 && (
                        <section>
                            <h3 className="mb-5">Cuéntanos sobre ti</h3>
                            <div className="mb-5">
                                <label>Nombre *</label>
                                <input {...(register('name'), { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="mb-5 flex gap-5">
                                <div>
                                    <label>Apellido Paterno *</label>
                                    <input
                                        {...(register('lastname'), { required: true })}
                                    />
                                    {errors.lastname && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div>
                                    <label>Apellido Materno *</label>
                                    <input
                                        {...(register('mother_last_name'),
                                        { required: true })}
                                    />
                                    {errors.mother_last_name && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-5 flex gap-5">
                                <div>
                                    <label>Correo Electrónico *</label>
                                    <input {...(register('email'), { required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div>
                                    <label>Número de teléfono*</label>
                                    <input
                                        {...(register('phoneNumber'), { required: true })}
                                    />
                                    {errors.phoneNumber && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="mb-5 flex gap-5">
                                <div>
                                    <label>Contraseña*</label>
                                    <input
                                        {...(register('password'), { required: true })}
                                    />
                                    {errors.password && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div>
                                    <label>Confirmar Contraseña*</label>

                                    <input
                                        {...(register('confirmPassword'),
                                        { required: true })}
                                    />
                                    {errors.confirmPassword && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full text-center mt-16">
                                <button
                                    className="btn btn-primary m-auto "
                                    onClick={() => setSetpsForm(steps => ++steps)}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </section>
                    )}
                    {stepsForm === 1 && (
                        <section>
                            <input
                                defaultValue="Dirección"
                                {...(register('address'), { required: true })}
                            />

                            {errors.address && <span>This field is required</span>}
                            <button
                                className="btn btn-primary"
                                onClick={() => setSetpsForm(steps => --steps)}
                            >
                                <FaAngleLeft size={25} />
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => setSetpsForm(steps => ++steps)}
                            >
                                <FaAngleRight size={25} />
                            </button>
                        </section>
                    )}
                    {stepsForm === 2 && (
                        <section>
                            <h2>Selecciona su membresía Q</h2>

                            <button
                                className="btn btn-primary"
                                onClick={() => setSetpsForm(steps => --steps)}
                            >
                                <FaAngleLeft size={25} />
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => setSetpsForm(steps => ++steps)}
                            >
                                <FaAngleRight size={25} />
                            </button>
                        </section>
                    )}
                    {stepsForm === 3 && (
                        <section>
                            <h2>Seleccione su método de pago</h2>

                            <button
                                className="btn btn-primary"
                                onClick={() => setSetpsForm(steps => ++steps)}
                            >
                                Finalizar
                            </button>
                        </section>
                    )}
                </form>
            </div>
        </div>
    );
};

export { SignUpForm };
