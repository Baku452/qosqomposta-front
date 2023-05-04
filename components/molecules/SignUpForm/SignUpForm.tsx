import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import StepsForm from './StepsForm/StepsForm';

//Styles
import styles from './signUp.module.scss';
import StepAccountInformation from './StepAccountInformation/StepAccountInformation';
import StepsButton from './StepsButtons/StepsButtons';
import { stepsForms } from '@/constants/authForms.const';
import StepPaymentMethod from './StepPaymentMethod/StepPaymentMethod';
import StepPickupPlace from './StepPickUpPlace/StepMembership';
import MapContainer from '@/components/atoms/MapPicker/MapPicker';

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
    referencePlace: string;
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
            <div className="flex flex-col justify-between shadow-xl rounded-xl p-10 max-w-3xl m-auto bg-white text-left text-gray-400 ">
                <form
                    className={`m-0 px-10 ${styles.formSignUp}`}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {stepsForm === 0 && <StepAccountInformation />}
                    {stepsForm === 1 && <StepPickupPlace />}
                    {stepsForm === 2 && <StepPaymentMethod />}
                </form>
                <StepsButton
                    steps={stepsForm}
                    maxSteps={stepsForms.length}
                    decreaseStep={handleDecreaseStepsForms}
                    increaseStep={handleIncreaseStepsForms}
                />
            </div>
        </div>
    );
};

export default SignUpForm;
