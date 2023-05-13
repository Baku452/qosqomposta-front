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
import { TiEdit } from 'react-icons/ti';

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

  const handleSetStepForm = (value: number) => {
    setCurrentStep(value);
  };

  return (
    <div className="flex flex-col max-w-lg m-auto">
      <SignUpContextProvider>
        <div className="rounded-lg flex justify-between bg-greenQ text-white p-3 text-lg">
          <div>
            {selectedService?.name ? (
              <>
                <p>{selectedService.name}</p>
              </>
            ) : (
              <p className="text-red-600">No ha seleccionado un servicio</p>
            )}
          </div>
          <div className="flex items-center">
            <p>{selectedService && `S/. ${selectedService.price}`}</p>
            <div>
              <Link href={SELECT_SERVICE_PATH}>
                <TiEdit className="mb-1 ml-1" size={25} />
              </Link>
            </div>
          </div>
        </div>
        <h1 className="mt-10">Crea tu cuenta</h1>
        <p className="pb-5">
          Paso {currentStep + 1} de {stepsForm.length}
        </p>
        <div className="text-left">
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
          {currentStep === 3 && (
            <SummarySignUpForm
              handleSetStepForm={handleSetStepForm}
              stepsForm={stepsForm.slice(0, 2)}
            />
          )}
        </div>
      </SignUpContextProvider>
    </div>
  );
};

export default SignUpForm;
