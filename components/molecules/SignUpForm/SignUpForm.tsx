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

const validationSchema = yup.object().shape({
    name: yup.string().trim().required('Este campo es requerido').nullable(),
    lastname: yup.string().trim().required('Este campo es requerido'),
    mother_last_name: yup.string().trim().required('Este campo es requerido'),
    email: yup
        .string()
        .matches(EMAIL_REGEX, 'Correo Inválido')
        .required('Este campo es requerido'),

    phoneNumber: yup
        .string()
        .matches(PHONE_REGEX_PATTERN, 'Número de teléfono inválido')
        .required('Este campo es requerido'),
    password: yup
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(20, 'La contraseña no debe tener más de 20 caracteres')
        .matches(
            PASSWORD_REGEX,
            'La contraseña debe tener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial',
        )
        .required('Este campo es requerido'),
});

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
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    return (
        <div>
            <StepsForm stepActive={stepsForm} setStep={setSetpsForm} />
            <SignUpContextProvider>
                <FormProvider {...methods}>
                    <div className="flex flex-col justify-between shadow-xl rounded-xl p-10 max-w-3xl m-auto bg-white text-left text-gray-400">
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
            </SignUpContextProvider>
        </div>
    );
};

export default SignUpForm;
