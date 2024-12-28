import React from 'react';

//Styles
import styles from './stepsForm.module.scss';
import { StepsFormRegister } from '@/types/mainTypes';

export interface StepsFormProps {
  stepsFormsData: StepsFormRegister[];
  stepActive: number;
  setStep: (value: number) => void;
}
const StepsForm: React.FC<StepsFormProps> = ({ stepsFormsData, stepActive, setStep }) => {
  return (
    <section className="m-auto my-0 max-w-3xl py-10 pb-10">
      <div className="flex justify-center">
        {stepsFormsData.map(step => (
          <div
            className={`flex flex-col items-center ${styles.circleStep}`}
            key={step.key}
          >
            <h6 className="mb-3 max-w-[100px]">{step.title}</h6>
            <div
              onClick={() => setStep(step.value)}
              className={`${
                stepActive === step.value || step.complete ? 'bg-yellowQ' : 'bg-white'
              } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-yellowQ p-4`}
            >
              {step.value + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsForm;
