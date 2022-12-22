import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch('email'));

  return (
    <div className="rounded-xl shadow-lg m-auto w-3/6 p-5 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`m-auto flex flex-col items-center ${styles.formLogin}`}
      >
        <input placeholder="Correo Electrónico" {...register('email')} />
        {errors.email && <span>This field is required</span>}
        <input placeholder="Contraseña" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}

        <button className="btn-primary mb-4" type="submit">
          Ingresar
        </button>
        <div className="p-4">
          No tienes una cuenta?
          <Link href="/auth/register">
            <a className="ml-2">Create una cuenta</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
