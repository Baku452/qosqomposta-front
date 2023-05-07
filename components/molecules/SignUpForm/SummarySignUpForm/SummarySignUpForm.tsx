import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import QosqompostaServicesContext, {
    ServiceContextType,
} from '@/context/ServicesContext';
import { BsPencilSquare } from 'react-icons/bs';
import { NOT_FILLED_FIELD } from '@/constants/authForms.const';

//Styles
import registerStyles from '../signUp.module.scss';
import styles from './summaryform.module.scss';

const SummarySignUpForm: React.FC = () => {
    const { formState } = useContext(SignUpContext) as SignUpContextType;
    const { selectedService } = useContext(
        QosqompostaServicesContext,
    ) as ServiceContextType;

    const { handleSubmit, getValues } = useForm({ defaultValues: formState });

    const formValues = getValues();

    return (
        <div className={`${styles.containerSummary} h-full`}>
            <div>
                <h2 className="mb-5">Resumen de respuestas</h2>
                <div className={`flex justify-start gap-24`}>
                    <div className={`${styles.headersContainer}`}>
                        <h5>Nombre</h5>
                        <h5>Apellidos</h5>
                        <h5>Correo Electrónico</h5>
                        <h5>Número de teléfono</h5>
                        <h5>Dirección</h5>
                        <h5>Referencia de Dirección</h5>
                        <h5>Fecha de Nacimiento</h5>
                        <h5>Servicio Seleccionado</h5>
                        <h5>Método de pago</h5>
                    </div>
                    <div className={`${styles.answersContainer} text-black`}>
                        <div>
                            <p>
                                {formValues.name ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues.lastname && formValues.mother_last_name ? (
                                    <>
                                        {formValues.lastname}{' '}
                                        {formValues.mother_last_name}
                                    </>
                                ) : (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues.email ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues.phoneNumber ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues.location?.address ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues.location?.reference ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {formValues?.dateBirth?.toDateString() ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="flex items-center">
                            {selectedService?.name ? (
                                <>
                                    <p className="block h-fit">{selectedService?.name}</p>
                                    <BsPencilSquare
                                        title="Cambiar"
                                        className="text-greenQ"
                                        size={20}
                                    />
                                </>
                            ) : (
                                <span className={registerStyles.errorLabel}>
                                    {NOT_FILLED_FIELD}
                                </span>
                            )}
                        </div>
                        <div>
                            <p>
                                {formValues.paymentMethod ?? (
                                    <span className={registerStyles.errorLabel}>
                                        {NOT_FILLED_FIELD}
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-5">
                <button className="btn btn-primary mx-auto text-center">
                    Confirmar Registro
                </button>
            </div>
        </div>
    );
};

export default SummarySignUpForm;
