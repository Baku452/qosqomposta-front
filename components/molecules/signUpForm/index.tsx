import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './index.module.scss';

type Inputs = {
    name: string;
    lastname: string;
    address: string;
    dateBirth: Date;
    membership: string;
};

function SignUpForm() {
    const [stepsForm, setSetpsForm] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch('name')); // watch input value by passing the name of it

    return (
        <div className="p-10 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <ul className={`${styles.progressBar} flex w-full`}>
                    <li>
                        <span>Datos de contacto</span>
                    </li>
                    <li>
                        <span>Dirección</span>
                    </li>
                    <li>
                        <span>Tipo de Membresía</span>
                    </li>
                </ul> */}
                {stepsForm === 0 && (
                    <section>
                        <h2>Cuál es tu nombre</h2>
                        <input
                            defaultValue="Nombre"
                            {...(register('name'), { required: true })}
                        />
                        <input
                            defaultValue="Apellido"
                            {...(register('lastname'), { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                        <button
                            className="btn btn-primary"
                            onClick={() => setSetpsForm(steps => ++steps)}
                        >
                            Siguiente
                        </button>
                    </section>
                )}
                {stepsForm === 1 && (
                    <section>
                        <h2>Cuál es tu dirección?</h2>
                        <input
                            defaultValue="Dirección"
                            {...(register('address'), { required: true })}
                        />

                        {errors.address && <span>This field is required</span>}
                        <button
                            className="btn btn-primary"
                            onClick={() => setSetpsForm(steps => ++steps)}
                        >
                            Siguiente
                        </button>
                    </section>
                )}
                {stepsForm === 2 && (
                    <section>
                        <h2>Selecciona su membresía Q</h2>

                        <button
                            className="btn btn-primary"
                            onClick={() => setSetpsForm(steps => ++steps)}
                        >
                            Siguiente
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
                            Siguiente
                        </button>
                    </section>
                )}
            </form>
        </div>
    );
}

export { SignUpForm };
