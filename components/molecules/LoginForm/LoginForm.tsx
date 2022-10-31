import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch('example'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-xl shadow-lg m-auto w-3/6 flex p-5 ${styles.formLogin}`}
    >
      <input defaultValue="test" {...register('example')} />
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
