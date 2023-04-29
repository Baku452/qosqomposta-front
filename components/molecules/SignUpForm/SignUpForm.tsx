import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//Styles
import styles from './signUp.module.scss';
import QosqompostaServiceForm from './QosqompostaService/QosqompostaService';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';
import StepsButton from './StepsButtons/StepsButtons';
import { StepsForms } from '@/constants/authForms.const';
import StepMembership from './StepMembership/StepMembership';
import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';

export type Inputs = {
    name: string;
    lastname: string;
    mother_last_name: string;
    password: string;
    confirmPassword: string;
    email: string;
    address: string;
    dateBirth: Date;
    membership: string;
    phoneNumber: string;
};

const SignUpForm: React.FC = () => {
    const [stepsForm, setSetpsForm] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    const handleIncreaseStepsForms = () => {
        setSetpsForm(stepsForm => ++stepsForm);
    };

    const handleDecreaseStepsForms = () => {
        setSetpsForm(stepsForm => --stepsForm);
    };
    return (
        <div>
            <StepsForm stepActive={stepsForm} setStep={setSetpsForm} />
            <div className="shadow-xl rounded-xl p-10 max-w-3xl m-auto bg-white text-left text-gray-400">
                <form
                    className={`m-auto w-11/12 ${styles.formSignUp}`}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {stepsForm === 0 && <StepAccountInformation />}
                    {stepsForm === 1 && <QosqompostaServiceForm />}
                    {stepsForm === 2 && <StepMembership />}
                    {stepsForm === 3 && <StepPaymentMethod />}

                    <StepsButton
                        steps={stepsForm}
                        maxSteps={StepsForms.length}
                        decreaseStep={handleDecreaseStepsForms}
                        increaseStep={handleIncreaseStepsForms}
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
