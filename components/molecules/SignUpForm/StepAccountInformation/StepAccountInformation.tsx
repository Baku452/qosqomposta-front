import { Controller, useForm } from 'react-hook-form';
import { InputsSignUpForm } from '@/types/mainTypes';
import { useContext, useState } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//Styles
import styles from '../signUp.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX_PATTERN,
} from '@/constants/authForms.const';
import * as yup from 'yup';
import PhoneInput from 'react-phone-number-input';

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
  const [phoneNumber, setPhoneNumber] = useState('');
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required('Este campo es requerido').nullable(),
    lastname: yup.string().trim().required('Este campo es requerido'),
    mother_last_name: yup.string().trim().required('Este campo es requerido'),
    email: yup
      .string()
      .matches(EMAIL_REGEX, 'Correo Inválido')
      .required('Este campo es requerido'),

    // phoneNumber: yup
    //   .string()
    //   .matches(PHONE_REGEX_PATTERN, 'Número de teléfono inválido')
    //   .required('Este campo es requerido'),
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

  const {
    control,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<InputsSignUpForm>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
    increaseStep();
  };

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setFormState(prevFormData => ({
      ...prevFormData,
      phoneNumber: value,
    }));
  };
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-5 text-center">Cuéntanos sobre ti</h2>
      <div className="mb-5 h-[80.39px]">
        <Controller
          control={control}
          name="name"
          render={() => (
            <>
              <label>Nombre *</label>
              <input
                value={formState?.name}
                {...register('name', {
                  onChange: e => handleInputChange(e.target.name, e.target.value),
                })}
              />
              {errors.name && (
                <span className={styles.errorLabel}>{errors.name.message}</span>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-10 flex gap-10 h-[80.39px]">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="lastname"
            render={() => (
              <>
                <label>Apellido Paterno *</label>
                <input
                  value={formState?.lastname}
                  {...register('lastname', {
                    onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                />
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
            render={() => (
              <>
                <label>Apellido Materno *</label>
                <input
                  value={formState?.mother_last_name}
                  {...register('mother_last_name', {
                    onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                />
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
      <div className="mb-10 flex gap-10 h-[80.39px]">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="email"
            render={() => (
              <>
                <label>Correo Electrónico *</label>
                <input
                  type="email"
                  value={formState?.email}
                  {...register('email', {
                    onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                />
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
            render={() => (
              <>
                <label>Número de teléfono * </label>
                <PhoneInput
                  defaultCountry="PE"
                  value={phoneNumber}
                  {...register('phoneNumber', {
                    // onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                  international={false}
                  onChange={handleChange}
                  countries={['PE', 'US']} // You can specify which countries to include
                />
                {/* <input
                  value={formState?.phoneNumber}
                  {...register('phoneNumber', {
                    onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                /> */}
                {errors.phoneNumber && (
                  <span className={styles.errorLabel}>{errors.phoneNumber.message}</span>
                )}
              </>
            )}
          />
        </div>
      </div>
      <div className="mb-10 flex gap-10 h-[164.39px]">
        <div className="basis-1/2">
          <Controller
            control={control}
            name="password"
            render={() => (
              <>
                <label>Contraseña*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formState?.password}
                  {...register('password', {
                    onChange: e => handleInputChange(e.target.name, e.target.value),
                  })}
                />
                <div className="flex justify-start py-2">
                  <input
                    className="inline w-4 mr-1"
                    type="checkbox"
                    defaultChecked={showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <p className="text-sm text-gre">Mostrar contraseña</p>
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
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                selected={formState?.dateBirth}
                onChange={date => {
                  date && handleInputChange('dateBirth', date.getTime());
                  field.onChange(date);
                }}
                dateFormat="yyyy/MM/dd"
              />
            )}
          />

          {errors.dateBirth && (
            <span className={styles.errorLabel}>Este campo es requerido</span>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary m-auto text-center block">
        Siguiente
      </button>
    </form>
  );
};

export default StepAccountInformation;
