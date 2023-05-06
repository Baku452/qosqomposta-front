import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';

//Styles
import styles from './signUp.module.scss';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';
import StepsButton from './StepsButtons/StepsButtons';

import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';
import StepPickupPlace from './StepPickUpPlace/StepMembership';
import SummarySignUpForm from './SummarySignUpForm/SummarySignUpForm';
import { SignUpContextProvider } from '@/context/SignUpContext';
import Image from 'next/image';
import { LOGO_COLOR } from '@/public/data/homeImages';
import { stepsFormsData } from '@/constants/authForms.const';
import { StepsFormRegister } from '@/types/mainTypes';

const SignUpForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepsForm, setStepsForm] = useState<StepsFormRegister[]>([...stepsFormsData]);
    const [paymentMethodSelected, setPaymentMethodSelected] = useState<
        string | undefined
    >();

    const handleStepStepForm = (valueStep: number, isValid: boolean) => {
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

    const handleDecreaseStepsForms = () => {
        setCurrentStep(stepsForm => --stepsForm);
    };
    const methods = useForm({
        // resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    return (
        <div className="flex">
            <SignUpContextProvider>
                <FormProvider {...methods}>
                    <div className="justify-between shadow-xl rounded-xl p-10 w-[48rem] h-[719px] m-auto bg-white text-left text-gray-400">
                        <div className={`m-0 px-10 ${styles.formSignUp} h-full`}>
                            {currentStep === 0 && (
                                <StepAccountInformation
                                    currentStep={currentStep}
                                    handleStepStepForm={handleStepStepForm}
                                    increaseStep={handleIncreaseStepsForms}
                                />
                            )}
                            {currentStep === 1 && <StepPickupPlace />}
                            {currentStep === 2 && (
                                <StepPaymentMethod
                                    increaseStep={handleIncreaseStepsForms}
                                    paymentMethodSelected={paymentMethodSelected}
                                    setPaymentMethodSelected={setPaymentMethodSelected}
                                />
                            )}
                            {currentStep === 3 && <SummarySignUpForm />}
                        </div>
                    </div>
                </FormProvider>
                <div className="flex flex-col items-center basis-1/2">
                    <h1 className="mt-10">Registro de Nuevo Usuario</h1>
                    <StepsForm
                        stepsFormsData={stepsForm}
                        stepActive={currentStep}
                        setStep={setCurrentStep}
                    />
                    <div className="py-10">
                        <Image
                            src={LOGO_COLOR}
                            width={300}
                            height={300}
                            alt="logo Color"
                        />
                    </div>
                </div>
            </SignUpContextProvider>
        </div>
    );
};

export default SignUpForm;
