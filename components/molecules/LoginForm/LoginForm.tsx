import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

type LoginFormFields = {
    email: string;
    password: string;
};

function LoginForm() {
    const [error, setError] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormFields>({
        mode: 'onBlur',
        resolver: yupResolver(
            yup.object().shape({
                email: yup
                    .string()
                    .required('Email es necesario')
                    .email('Email inválido'),
                password: yup
                    .string()
                    .required('La contraseña es requerida')
                    .min(6, 'La contraseña tiene que tener mínimo 6 caracácteres'),
            }),
        ),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const router = useRouter();

    const handleLogin = async (data: LoginFormFields) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            router.push('/dashboard'); // Redirect the user to the dashboard page on successful login
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="p-10 rounded-3xl shadow-xl">
            <form className="mb-5 w-3/4" onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-5">
                    <input
                        placeholder="Correo Electrónico"
                        type="email"
                        {...register('email')}
                    />
                    {errors.email && <div>{errors.email.message}</div>}
                </div>
                <div className="mb-5">
                    <input
                        placeholder="Contraseña"
                        className="border"
                        type="password"
                        {...register('password')}
                    />
                    {errors.password && <div>{errors.password.message}</div>}
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}

export { LoginForm };
