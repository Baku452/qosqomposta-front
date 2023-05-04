import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';

//Styles
import styles from './signUp.module.scss';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';
import StepsButton from './StepsButtons/StepsButtons';
import { stepsForms } from '@/constants/authForms.const';
import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';
import StepPickupPlace from './StepPickUpPlace/StepMembership';
import SummarySignUpForm from './SummarySignUpForm/SummarySignUpForm';
import { SignUpContextProvider } from '@/context/SignUpContext';

const SignUpForm: React.FC = () => {
    const [stepsForm, setSetpsForm] = useState(0);
    const [paymentMethodSelected, setPaymentMethodSelected] = useState<
        string | undefined
    >();

    const handleIncreaseStepsForms = () => {
        setSetpsForm(stepsForm => ++stepsForm);
    };

    const handleDecreaseStepsForms = () => {
        setSetpsForm(stepsForm => --stepsForm);
    };
    const methods = useForm();

    return (
        <div>
            <StepsForm stepActive={stepsForm} setStep={setSetpsForm} />
            <SignUpContextProvider>
                <FormProvider {...methods}>
                    <div className="flex flex-col justify-between shadow-xl rounded-xl p-10 max-w-3xl m-auto bg-white text-left text-gray-400 ">
                        <div className={`m-0 px-10 ${styles.formSignUp}`}>
                            {stepsForm === 0 && <StepAccountInformation />}
                            {stepsForm === 1 && <StepPickupPlace />}
                            {stepsForm === 2 && (
                                <StepPaymentMethod
                                    paymentMethodSelected={paymentMethodSelected}
                                    setPaymentMethodSelected={setPaymentMethodSelected}
                                />
                            )}
                            {stepsForm === 3 && <SummarySignUpForm />}
                        </div>
                        <StepsButton
                            steps={stepsForm}
                            maxSteps={stepsForms.length}
                            decreaseStep={handleDecreaseStepsForms}
                            increaseStep={handleIncreaseStepsForms}
                        />
                    </div>
                </FormProvider>
            </SignUpContextProvider>
        </div>
    );
};

export default SignUpForm;
