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
    <section className="m-auto max-w-3xl pb-10 my-0 py-10">
      <div className="flex justify-center">
        {stepsFormsData.map(step => (
          <div
            className={`flex flex-col items-center  ${styles.circleStep}`}
            key={step.key}
          >
            <h6 className="max-w-[100px] mb-3">{step.title}</h6>
            <div
              onClick={() => setStep(step.value)}
              className={`${
                stepActive === step.value || step.complete ? 'bg-yellowQ' : 'bg-white'
              } border-yellowQ border-2 cursor-pointer rounded-full w-10 h-10 p-4 flex items-center justify-center `}
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
