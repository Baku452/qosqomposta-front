import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'react-select';

//Styles
import formStyles from '../signUp.module.scss';
import { useContext } from 'react';

//Context
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import PlacesContext, { PlacesContextType } from '@/context/PlacesContext';

//Types
import { FormLocation } from '@/types/mainTypes';

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
    district: yup.string().trim().required('Este campo es requerido'),
    reference: yup.string().trim().required('Este campo es requerido').nullable(),
  });

  const {
    control,
    getValues,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormLocation>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      ...formAppState.location,
    },
  });
  const onSubmit = () => {
    const formValues = getValues();
    setFormState({
      ...formAppState,
      location: {
        ...formAppState,
        ...formValues,
      },
    });
    handleStepForm(currentStep, isValid);
    increaseStep();
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Ingrese sus datos para el recojo</h2>
        <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>

        <div className="mb-5 mt-5">
          <label>Distrito</label>
          <Controller
            control={control}
            name="district"
            render={() => (
              <Select placeholder="Selecciones su distrito" options={cities} />
            )}
          />
        </div>
        <div className="mb-5 mt-5">
          <label>{`Dirección (Incluya si es Jiron, Calle, Avenida)`}</label>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <>
                <input {...field} />
                {errors.reference && (
                  <span className={formStyles.errorLabel}>
                    {errors.reference.message?.toString()}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-5 mt-5">
          <label>Referencia del lugar *</label>
          <Controller
            control={control}
            name="reference"
            render={({ field }) => (
              <>
                <input {...field} />
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
