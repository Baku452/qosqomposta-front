import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';

//Styles
import styles from './signUp.module.scss';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';
import StepsButton from './StepsButtons/StepsButtons';
import {
    EMAIL_REGEX,
    PASSWORD_REGEX,
    PHONE_REGEX_PATTERN,
    stepsForms,
} from '@/constants/authForms.const';
import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';
import StepPickupPlace from './StepPickUpPlace/StepMembership';
import SummarySignUpForm from './SummarySignUpForm/SummarySignUpForm';
import { SignUpContextProvider } from '@/context/SignUpContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { LOGO_COLOR } from '@/public/data/homeImages';

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
    const methods = useForm({
        // resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    return (
        <div className="flex">
            <SignUpContextProvider>
                <FormProvider {...methods}>
                    <div className="flex flex-col justify-between shadow-xl rounded-xl p-10 w-[48rem] h-[719px] m-auto bg-white text-left text-gray-400">
                        <div className={`m-0 px-10 ${styles.formSignUp}`}>
                            {stepsForm === 0 && (
                                <StepAccountInformation
                                    increaseStep={handleIncreaseStepsForms}
                                />
                            )}
                            {stepsForm === 1 && <StepPickupPlace />}
                            {stepsForm === 2 && (
                                <StepPaymentMethod
                                    paymentMethodSelected={paymentMethodSelected}
                                    setPaymentMethodSelected={setPaymentMethodSelected}
                                />
                            )}
                            {stepsForm === 3 && <SummarySignUpForm />}
                        </div>
                        {/* <StepsButton
                            steps={stepsForm}
                            maxSteps={stepsForms.length}
                            decreaseStep={handleDecreaseStepsForms}
                            increaseStep={handleIncreaseStepsForms}
                        /> */}
                    </div>
                </FormProvider>
                <div className="flex flex-col items-center basis-1/2">
                    <h1 className="mt-10">Registro de Nuevo Usuario</h1>
                    <StepsForm stepActive={stepsForm} setStep={setSetpsForm} />
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
