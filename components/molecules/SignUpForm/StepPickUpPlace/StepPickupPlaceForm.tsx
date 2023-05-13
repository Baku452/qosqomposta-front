import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Styles
import formStyles from '../signUp.module.scss';
import { useContext } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import { FormLocation, InputsSignUpForm } from '@/types/mainTypes';
import PlacesContext, { PlacesContextType } from '@/context/PlacesContext';

export interface StepPickupPlaceProps {
  currentStep: number;
  handleStepForm: (valueStep: number, isValid: boolean) => void;
  increaseStep: () => void;
}
const StepPickupPlace: React.FC<StepPickupPlaceProps> = ({
  currentStep,
  handleStepForm,
  increaseStep,
}) => {
  const { formState: formAppState, setFormState } = useContext(
    SignUpContext,
  ) as SignUpContextType;

  const { cities } = useContext(PlacesContext) as PlacesContextType;

  const validationSchema = yup.object().shape({
    address: yup.string().trim().required('Este campo es requerido'),
    reference: yup.string().trim().required('Este campo es requerido').nullable(),
  });

  const {
    control,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormLocation>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const onSubmit = () => {
    handleStepForm(currentStep, isValid);
    increaseStep();
    console.log(cities);
  };

  const handleReferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (formAppState) {
      setFormState((prevState: InputsSignUpForm) => {
        const updatedForm: InputsSignUpForm = {
          ...prevState,
          location: {
            ...prevState.location,
            reference: value,
          },
        };
        return updatedForm;
      });
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Ingrese sus datos para el recojo</h2>
        <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>

        <div className="mb-5 mt-5">
          <label>Referencia del lugar *</label>
          <Controller
            control={control}
            name="reference"
            render={() => (
              <>
                <input
                  value={formAppState?.location?.reference}
                  {...register('reference', {
                    onChange: handleReferenceChange,
                  })}
                />
                {errors.reference && (
                  <span className={formStyles.errorLabel}>
                    {errors.reference.message?.toString()}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary m-auto text-center block">
          Siguiente
        </button>
      </form>
    </>
  );
};

export default StepPickupPlace;
