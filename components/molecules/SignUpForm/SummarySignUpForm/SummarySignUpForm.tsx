import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import QosqompostaServicesContext, {
  ServiceContextType,
} from '@/context/ServicesContext';
import { BsPencilSquare } from 'react-icons/bs';
import { NOT_FILLED_FIELD, SUMMARY_SIGNUP_FORM } from '@/constants/authForms.const';

//Styles
import registerStyles from '../signUp.module.scss';
import styles from './summaryform.module.scss';
import { StepsFormRegister } from '@/types/mainTypes';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/actions/user.app.actions';
import Link from 'next/link';
import { SELECT_SERVICE_PATH } from '@/routes/routes.config';
import { makeRegisterUserSchema } from '@/utils/auth.utils';

export interface SummarySignUpFormProps {
  stepsForm: StepsFormRegister[];
}
const SummarySignUpForm: React.FC<SummarySignUpFormProps> = ({ stepsForm }) => {
  const { formState } = useContext(SignUpContext) as SignUpContextType;
  const { selectedService } = useContext(
    QosqompostaServicesContext,
  ) as ServiceContextType;

  const { getValues } = useForm({ defaultValues: formState });

  const formValues = getValues();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (formState) {
      registerUser(makeRegisterUserSchema(formValues, selectedService?._id))(dispatch);
    }
  };
  const notValidForm = stepsForm.some(step => step.complete === false);
  return (
    <div className={`${styles.containerSummary} h-full`}>
      <div>
        <h2 className="mb-5">Resumen de respuestas</h2>
        <div className={`flex justify-start gap-24`}>
          <div className={`${styles.headersContainer}`}>
            {SUMMARY_SIGNUP_FORM.map(title => (
              <h5 key={title.name}>{title.name}</h5>
            ))}
          </div>
          <div className={`${styles.answersContainer} text-black`}>
            <div>
              <p>
                {formValues.name || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div>
              <p>
                {formValues.lastname && formValues.mother_last_name ? (
                  <>
                    {formValues.lastname} {formValues.mother_last_name}
                  </>
                ) : (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div>
              <p>
                {formValues.email || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div>
              <p>
                {formValues.phoneNumber || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div className="w-52 overflow-hidden whitespace-nowrap">
              <p
                title={formValues.location?.address || ''}
                className="text-ellipsis overflow-hidden"
              >
                {formValues.location?.address || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div>
              <p>
                {formValues.location?.reference || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div>
              <p>
                {formValues?.dateBirth?.toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }) ?? (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
            <div className="flex items-center">
              {selectedService?.name ? (
                <>
                  <p className="block h-fit">{selectedService?.name}</p>
                  <Link href={SELECT_SERVICE_PATH}>
                    <BsPencilSquare title="Cambiar" className="text-greenQ" size={20} />
                  </Link>
                </>
              ) : (
                <Link href={SELECT_SERVICE_PATH}>
                  <span className={registerStyles.errorLabel}>
                    {'Seleccione un servicio Q'}
                  </span>
                </Link>
              )}
            </div>
            <div>
              <p>
                {formValues.paymentMethod || (
                  <span className={registerStyles.errorLabel}>{NOT_FILLED_FIELD}</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-5">
        <button
          disabled={notValidForm}
          onClick={handleSubmit}
          className="btn btn-primary mx-auto text-center"
        >
          Confirmar Registro
        </button>
      </div>
    </div>
  );
};

export default SummarySignUpForm;
