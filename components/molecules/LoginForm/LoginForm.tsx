import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FORGOT_PASSWORD, REGISTER_PATH } from '@/routes.config';
import Link from 'next/link';
import Cookies from 'js-cookie';
import {
    DEFAULT_ERROR_MESSAGE,
    firebaseAuthErrorCodes,
} from '@/contants/firebaseAuthErrorConst';

type LoginFormFields = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const [errorAuth, setErrorAuth] = useState<string>('');

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
                    .required('El correo electrónico es necesario')
                    .email('Correo electrónico inválido'),
                password: yup
                    .string()
                    .required('La contraseña es necesaria')
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
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            );
            const token = await userCredentials.user.getIdToken();
            Cookies.set('token', token);
            router.push('/dashboard');
        } catch (error) {
            const firebaseError = firebaseAuthErrorCodes.find(
                errorFirebase => errorFirebase.code == error.code,
            );
            setErrorAuth(firebaseError ? firebaseError.message : DEFAULT_ERROR_MESSAGE);
        }
    };
    return (
        <div className="p-10 rounded-3xl shadow-xl min-w-[500px] mb-20">
            <form
                className="mb-5 w-3/4 m-auto relative block"
                onSubmit={handleSubmit(handleLogin)}
            >
                <h2 className="text-center py-5 font-paragraph text-2xl">
                    Ingrese sus datos
                </h2>
                <div className="mb-5">
                    {errors.email && (
                        <span className="text-error">{errors.email.message}</span>
                    )}
                    <input
                        placeholder="Correo Electrónico"
                        type="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-5 text-right">
                    {errors.password && (
                        <div className="text-left">
                            <span className="text-error">{errors.password.message}</span>
                        </div>
                    )}
                    <input
                        className="!block !relative"
                        placeholder="Contraseña"
                        type="password"
                        {...register('password')}
                    />
                    <a
                        className="text-yellowQ-500 pt-3 relative block"
                        href={FORGOT_PASSWORD}
                    >
                        Olvide mi contraseña
                    </a>
                </div>
                <button className="btn btn-primary !w-full block" type="submit">
                    Ingresar
                </button>
            </form>
            {errorAuth && <span className="text-error">{errorAuth}</span>}
            <div className="text-center">
                <p>¿No tiene una cuenta?</p>
                <Link href={REGISTER_PATH}>
                    <a className="text-yellowQ-500 font-bold">Crearse una cuenta Q</a>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
