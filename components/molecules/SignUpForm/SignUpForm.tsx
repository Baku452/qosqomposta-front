import React, { useContext, useState } from 'react';
import StepsForm from './StepsForm/StepsForm';

//Styles
import styles from './signUp.module.scss';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';

import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';
import StepPickupPlace from './StepPickUpPlace/StepPickupPlaceForm';
import SummarySignUpForm from './SummarySignUpForm/SummarySignUpForm';
import { SignUpContextProvider } from '@/context/SignUpContext';
import Image from 'next/image';
import { LOGO_COLOR } from '@/public/data/homeImages';
import { stepsFormsData } from '@/constants/authForms.const';
import { StepsFormRegister } from '@/types/mainTypes';
import QosqompostaServicesContext, {
  ServiceContextType,
} from '@/context/ServicesContext';
import Link from 'next/link';
import { SELECT_SERVICE_PATH } from '@/routes/routes.config';

const SignUpForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsForm, setStepsForm] = useState<StepsFormRegister[]>([...stepsFormsData]);
  const [paymentMethodSelected, setPaymentMethodSelected] = useState<
    string | undefined
  >();

  const { selectedService } = useContext(
    QosqompostaServicesContext,
  ) as ServiceContextType;

  const handleStepsForm = (valueStep: number, isValid: boolean) => {
    const updatedStepForms = stepsForm.map(step => {
      if (step.value === valueStep) {
        return {
          ...step,
          complete: isValid,
        };
      } else {
        return step;
      }
    });
    setStepsForm(updatedStepForms);
  };

  const handleIncreaseStepsForms = () => {
    setCurrentStep(stepsForm => ++stepsForm);
  };

  return (
    <div className="flex">
      <SignUpContextProvider>
        <div className="justify-between shadow-xl rounded-xl p-10 basis-1/2 h-[719px] m-auto bg-white text-left text-gray-400">
          <div className={`m-0 px-10 ${styles.formSignUp} h-full`}>
            {currentStep === 0 && (
              <StepAccountInformation
                currentStep={currentStep}
                handleStepForm={handleStepsForm}
                increaseStep={handleIncreaseStepsForms}
              />
            )}
            {currentStep === 1 && (
              <StepPickupPlace
                currentStep={currentStep}
                handleStepForm={handleStepsForm}
                increaseStep={handleIncreaseStepsForms}
              />
            )}
            {currentStep === 2 && (
              <StepPaymentMethod
                handleStepForm={handleStepsForm}
                currentStep={currentStep}
                increaseStep={handleIncreaseStepsForms}
                paymentMethodSelected={paymentMethodSelected}
                setPaymentMethodSelected={setPaymentMethodSelected}
              />
            )}
            {currentStep === 3 && <SummarySignUpForm stepsForm={stepsForm.slice(0, 2)} />}
          </div>
        </div>
        <div className="flex flex-col items-center basis-1/2">
          <h1 className="mt-10">Registro de Nuevo Usuario</h1>
          {selectedService?.name ? (
            <>
              <p>Está seleccionando el servicio: </p>
              <p className="my-5 font-bold">{selectedService?.name}</p>
              <Link className="underline text-greenQ" href={SELECT_SERVICE_PATH}>
                Cambiar Servicio
              </Link>
            </>
          ) : (
            <>
              <p className="text-red-600">No ha seleccionado un servicio</p>
              <Link href={SELECT_SERVICE_PATH}>
                <button className="btn btn-primary">Seleccione un servicio</button>
              </Link>
            </>
          )}
          <StepsForm
            stepsFormsData={stepsForm}
            stepActive={currentStep}
            setStep={setCurrentStep}
          />
          <div className="py-10">
            <Image src={LOGO_COLOR} width={300} height={300} alt="logo Color" />
          </div>
        </div>
      </SignUpContextProvider>
    </div>
  );
};

export default SignUpForm;
