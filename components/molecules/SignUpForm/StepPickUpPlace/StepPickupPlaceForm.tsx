import MapContainer from '@/components/atoms/MapPicker/MapPicker';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Styles
import formStyles from '../signUp.module.scss';
import { useContext } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
export interface StepPickupPlaceProps {
    currentStep: number;
    handleStepStepForm: (valueStep: number, isValid: boolean) => void;
    increaseStep: () => void;
}
const StepPickupPlace: React.FC<StepPickupPlaceProps> = ({
    currentStep,
    handleStepStepForm,
    increaseStep,
}) => {
    const validationSchema = yup.object().shape({
        address: yup.string().trim().required('Este campo es requerido'),
        referencePlace: yup
            .string()
            .trim()
            .required('Este campo es requerido')
            .nullable(),
    });

    const onSubmit = () => {
        handleStepStepForm(currentStep, methodsForm.formState.isValid);
        increaseStep();
    };

    const methodsForm = useForm({
        resolver: yupResolver(validationSchema),

        mode: 'onChange',
    });

    const errorsForm = methodsForm.formState.errors;
    const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;

    const handleReferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (formState) {
            setFormState({
                ...formState,
                location: {
                    ...formState.location,
                    reference: value,
                },
            });
        } else {
            setFormState({
                location: {
                    reference: value,
                },
            });
        }
    };

    return (
        <FormProvider {...methodsForm}>
            <form noValidate onSubmit={methodsForm.handleSubmit(onSubmit)}>
                <h2>Ingrese datos para el recojo</h2>
                <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>
                <MapContainer />
                <div className="mb-5 mt-5">
                    <label>Referencia del lugar *</label>
                    <Controller
                        control={methodsForm.control}
                        name="referencePlace"
                        render={() => (
                            <>
                                <input
                                    {...(methodsForm.register('referencePlace', {
                                        onChange: handleReferenceChange,
                                    }),
                                    { required: true })}
                                />
                                {errorsForm.referencePlace && (
                                    <span className={formStyles.errorLabel}>
                                        {errorsForm.referencePlace.message?.toString()}
                                    </span>
                                )}
                            </>
                        )}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary m-auto text-center block"
                >
                    Siguiente
                </button>
            </form>
        </FormProvider>
    );
};

export default StepPickupPlace;
