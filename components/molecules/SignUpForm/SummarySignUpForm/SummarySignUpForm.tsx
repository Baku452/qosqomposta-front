import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useServicesContext } from '@/context/ServicesContext';
import { BsPencilSquare } from 'react-icons/bs';
import {
  ACCOUNT_FORM_STEP,
  NOT_FILLED_FIELD,
  PAYMENT_METHOD_FORM_STEP,
  PICKUP_FORM_STEP,
  SUMMARY_SIGNUP_FORM,
} from '@/constants/authForms.const';

//Styles
import registerStyles from '../signUp.module.scss';
import styles from './summaryform.module.scss';
import { StepsFormRegister } from '@/types/mainTypes';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/actions/user.app.actions';
import { makeRegisterUserSchema } from '@/utils/auth.utils';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import Spinner from '@/components/atoms/Spinner/Spinner';
import { createToast } from '@/components/atoms/Toast/ToastApp';
import { useRouter } from 'next/router';
import { LOGIN_PATH } from '@/routes/routes.config';

export interface SummarySignUpFormProps {
  handleSetStepForm: (value: number) => void;
  stepsForm: StepsFormRegister[];
}
const SummarySignUpForm: React.FC<SummarySignUpFormProps> = ({
  stepsForm,
  handleSetStepForm,
}) => {
  const { formState } = useContext(SignUpContext) as SignUpContextType;
  const { selectedService } = useServicesContext();

  const { getValues } = useForm({
    defaultValues: {
      ...formState,
    },
  });

  const { isRegistering } = useSelector((state: State) => state.appUser);
  const formValues = getValues();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async () => {
    if (formState) {
      const result = await registerUser(
        makeRegisterUserSchema(formValues, selectedService?.pricing_id),
      )(dispatch);

      if (result) {
        createToast({
          toastId: 'Success User Create',
          message: 'Usuario Registrado con Exito!',
          toastType: 'success',
        });
        router.push(LOGIN_PATH);
      }
    }
  };
  const notValidForm = stepsForm.some(step => step.complete === false);
  return (
    <div className={`${styles.containerSummary} h-full`}>
      <div>
        <h2 className="mb-5">Confirmar registro</h2>
        <div className={`flex justify-start gap-24`}>
          <div className={`${styles.headersContainer}`}>
            {SUMMARY_SIGNUP_FORM.map(title => (
              <h5 key={title.name}>{title.name}</h5>
            ))}
          </div>
          <div className={`${styles.answersContainer} text-black`}>
            <div className="flex">
              <p>
                {formValues.name && formValues.lastname && formValues.mother_last_name ? (
                  <>
                    {formValues.name} {formValues.lastname} {formValues.mother_last_name}
                  </>
                ) : (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>

              <button onClick={() => handleSetStepForm(ACCOUNT_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>

            <div className="flex">
              <p>
                {formValues.document_identity ? (
                  <>{formValues.document_identity}</>
                ) : (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(ACCOUNT_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex">
              <p>
                {formValues.email || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(ACCOUNT_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex">
              <p>
                {formValues.phoneNumber || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(ACCOUNT_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex">
              <p>
                {formValues?.dateBirth?.toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }) ?? (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(ACCOUNT_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex w-52 overflow-hidden whitespace-nowrap">
              <p
                title={formValues.location?.district || ''}
                className="text-ellipsis overflow-hidden"
              >
                {formValues.location?.district || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(PICKUP_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex w-52 overflow-hidden whitespace-nowrap">
              <p
                title={formValues.location?.address || ''}
                className="text-ellipsis overflow-hidden"
              >
                {formValues.location?.address || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(PICKUP_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
            <div className="flex ">
              <textarea
                className="w-60"
                readOnly
                title={formValues.location.reference ?? ''}
              >
                {formValues.location?.reference || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </textarea>
              <button onClick={() => handleSetStepForm(PICKUP_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>

            <div className="flex">
              <p>
                {formValues.paymentMethod || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
              <button onClick={() => handleSetStepForm(PAYMENT_METHOD_FORM_STEP)}>
                <BsPencilSquare title="Cambiar" className="text-greenQ ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-5">
        <button
          disabled={notValidForm}
          onClick={handleSubmit}
          className={`btn btn-primary mx-auto text-center ${styles.registerButton} ${
            isRegistering ? styles.loadingButton : styles.notLoadingButton
          }`}
        >
          {isRegistering ? <Spinner size="xs" /> : <>Confirmar Registro</>}
        </button>
      </div>
    </div>
  );
};

export default SummarySignUpForm;
