import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import styles from './RegisterForm.module.scss';
import { MultiStepInputs } from 'types/formsTypes';
import { maxSteps, RegisterFormFields } from 'public/data/multiStepsFormData';
import ServicesQForm from '../ServicesQForm/ServicesQForm';
import CounterStepForm from '@/components/atoms/CounterStepForm/CounterStepForm';

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState<number>(0);

  const handleStepIncrement = () => {
    setStep(step => ++step);
  };

  const setStepValue = (value: number): void => {
    setStep(value);
  };
  const onSubmit = data => console.log(data);
  return (
    <div className="rounded-xl shadow-lg m-auto w-3/6 p-5 ">
      <CounterStepForm value={step} setStep={setStepValue} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`m-auto pt-8 flex flex-col items-center ${styles.formLogin}`}
      >
        {Object.values(RegisterFormFields).map(stepInputs => {
          return stepInputs.value == step
            ? stepInputs.fields.map(input => (
                <label className={styles.labelInputs} key={input.label}>
                  {input.label}
                  <input type={input.type} placeholder={input.placeHolder} />
                </label>
              ))
            : null;
        })}
        {maxSteps !== step ? (
          <button onClick={handleStepIncrement} className="btn-primary mb-4">
            Siguiente
          </button>
        ) : (
          <button className="btn-primary mb-4" type="submit">
            Registrarse
          </button>
        )}
        <div className="p-4">
          Ya tienes una cuenta?
          <Link href="/auth/login">
            <a className="ml-2">Inicia sesión</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
