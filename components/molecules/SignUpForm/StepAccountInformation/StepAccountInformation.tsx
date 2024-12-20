import { Controller, useForm } from 'react-hook-form';
import { InputsSignUpForm } from '@/types/mainTypes';
import { useContext, useState } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import DatePicker from 'react-datepicker';
import { yupResolver } from '@hookform/resolvers/yup';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/authForms.const';
import * as yup from 'yup';
import PhoneInput from 'react-phone-number-input';
//Styles
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../signUp.module.scss';
import { es } from 'date-fns/locale';

export interface StepAccountInformationProps {
  currentStep: number;
  handleStepForm: (valueStep: number, isValid: boolean) => void;
  increaseStep: () => void;
}
const StepAccountInformation: React.FC<StepAccountInformationProps> = ({
  increaseStep,
  handleStepForm,
  currentStep,
}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required('Este campo es requerido').nullable(),
    document_identity: yup.string().required('Este campo es requerido').nullable(),
    lastname: yup.string().trim().required('Este campo es requerido'),
    mother_last_name: yup.string().trim().required('Este campo es requerido'),
    phoneNumber: yup.string().required(),
    email: yup
      .string()
      .matches(EMAIL_REGEX, 'Correo Inválido')
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

  const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    control,
    getValues,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<InputsSignUpForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...formState,
    },
    mode: 'onChange',
  });

  const handleInputChange = (fieldName: string, value: string | number) => {
    setFormState((prevState: InputsSignUpForm) => {
      const updatedForm = {
        ...prevState,
        [fieldName]: value ?? '',
      };
      return updatedForm;
    });
  };

  const onSubmit = () => {
    handleStepForm(currentStep, isValid);
    setFormState(getValues());
    increaseStep();
  };

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="text-left">
      <div className="mb-5 h-[80.39px]">
        <label>Nombre *</label>
        <Controller
          defaultValue={formState?.name}
          control={control}
          name="name"
          render={({ field }) => <input {...field} />}
        />
        {errors.name && <span className={styles.errorLabel}>{errors.name.message}</span>}
      </div>
      <div className="mb-10 flex h-[80.39px] gap-10">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="lastname"
            render={({ field }) => (
              <>
                <label>Apellido Paterno *</label>
                <input {...field} />
                {errors.lastname && (
                  <span className={styles.errorLabel}>{errors.lastname.message}</span>
                )}
              </>
            )}
          ></Controller>
        </div>
        <div className="basis-1/2">
          <Controller
            control={control}
            name="mother_last_name"
            render={({ field }) => (
              <>
                <label>Apellido Materno *</label>
                <input {...field} />
                {errors.mother_last_name && (
                  <span className={styles.errorLabel}>
                    {errors.mother_last_name.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
      </div>
      <div className="mb-10 flex h-[80.39px] gap-10">
        <div className="">
          <Controller
            control={control}
            name="document_identity"
            render={({ field }) => (
              <>
                <label>Documento de Identidad (DNI / Pasaporte) *</label>
                <input type="number" {...field} />
                {errors.document_identity && (
                  <span className={styles.errorLabel}>
                    {errors.document_identity.message}
                  </span>
                )}
              </>
            )}
          ></Controller>
        </div>
      </div>
      <div className="mb-10 flex h-[80.39px] gap-10">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <>
                <label>Correo Electrónico *</label>
                <input {...field} type="email" />
                {errors.email && (
                  <span className={styles.errorLabel}>{errors.email.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="basis-1/2">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <>
                <label>Número de teléfono * </label>
                <PhoneInput
                  {...field}
                  defaultCountry="PE"
                  international={false}
                  countries={['PE', 'US']}
                />
                {errors.phoneNumber && (
                  <span className={styles.errorLabel}>{errors.phoneNumber.message}</span>
                )}
              </>
            )}
          />
        </div>
      </div>
      <div className="mb-10 flex h-[164.39px] gap-10">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <>
                <label>Contraseña*</label>
                <input {...field} type={showPassword ? 'text' : 'password'} />
                <div className="flex justify-start py-2">
                  <input
                    className="mr-1 inline w-4"
                    type="checkbox"
                    defaultChecked={showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <p className="text-gre text-sm">Mostrar contraseña</p>
                </div>
                {errors.password && (
                  <span className={styles.errorLabel}>{errors.password.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div className="basis-1/2">
          <label>Fecha de nacimiento*</label>
          <Controller
            control={control}
            name="dateBirth"
            render={({ field }) => (
              <DatePicker
                selected={formState?.dateBirth}
                onChange={date => {
                  date && handleInputChange('dateBirth', date.getTime());
                  field.onChange(date);
                }}
                dateFormatCalendar={'MMM yyyy'}
                showYearDropdown
                minDate={minDate}
                maxDate={new Date()}
                dropdownMode="select"
                locale={es}
              />
            )}
          />

          {errors.dateBirth && (
            <span className={styles.errorLabel}>Este campo es requerido</span>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary m-auto block text-center">
        Siguiente
      </button>
    </form>
  );
};

export default StepAccountInformation;
