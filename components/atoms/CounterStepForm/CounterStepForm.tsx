import React from 'react';
import styles from './CounterStepForm.module.scss';
import { BsCheckLg } from 'react-icons/bs';

export interface CounterStepFormProps {
  value: number;
  setStep: (value: number) => void;
}

export interface TitlesCounter {
  id: string;
  value: number;
  title: string;
}

export const titlesForm: TitlesCounter[] = [
  {
    id: 'personalInfo',
    value: 0,
    title: 'Información Personal',
  },
  {
    id: 'address',
    value: 1,
    title: 'Dirección de Entrega',
  },
  {
    id: 'membership',
    value: 2,
    title: 'Seleccione su membresía',
  },
];
const CounterStepForm: React.FC<CounterStepFormProps> = ({ value, setStep }) => {
  return (
    <div className={styles.containerDots}>
      {titlesForm.map(title => (
        <div className={styles.containerSingleDot} key={title.value}>
          <p>{title.title}</p>
          <div
            onClick={() => setStep(title.value)}
            key={title.value}
            className={` ${value >= title.value ? styles.dotActive : styles.dotUnactive}`}
          >
            {value >= title.value && <BsCheckLg />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterStepForm;
