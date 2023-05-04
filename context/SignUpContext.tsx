import { InputsSignUpForm } from '@/types/mainTypes';
import React, { createContext, useState } from 'react';

export interface SignUpContextType {
    formState: InputsSignUpForm;
    setFormState: (value: InputsSignUpForm) => void;
}

const SignUpContext = createContext<SignUpContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

export const SignUpContextProvider: React.FC<Props> = ({ children }) => {
    const [initialState, setState] = useState<InputsSignUpForm>({
        name: '',
        lastname: '',
        mother_last_name: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
        dateBirth: new Date(),
        membership: '',
        phoneNumber: '',
        referencePlace: '',
        paymentMethod: '',
    });

    const contextValue: SignUpContextType = {
        formState: initialState,
        setFormState: setState,
    };

    return (
        <SignUpContext.Provider value={contextValue}>{children}</SignUpContext.Provider>
    );
};

export default SignUpContext;
