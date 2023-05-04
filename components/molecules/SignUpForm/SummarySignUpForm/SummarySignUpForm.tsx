import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import React, { useContext, useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

//Styles
import styles from './summaryform.module.scss';

const SummarySignUpForm: React.FC = () => {
    const { formState } = useContext(SignUpContext) as SignUpContextType;
    const { handleSubmit, getValues } = useForm({ defaultValues: formState });

    const formValues = getValues();
    // useEffect(() => {
    //     console.log(valuesEntered);
    // }, [valuesEntered]);
    return (
        <div className={styles.containerSummary}>
            <h2 className="mb-5">Resumen de respuestas</h2>
            <div className="flex justify-evenly">
                <div>
                    <p>Nombre</p>
                    <p>Apellidos</p>
                    <p>Correo Electrónico</p>
                    <p>Número de teléfono</p>
                    <p>Dirección</p>
                    <p>Referencia de Dirección</p>
                    <p>Fecha de Nacimiento</p>
                    <p>Tipo de Membresia</p>
                    <p>Método de pago</p>
                </div>
                <div>
                    <p>{formValues.name}</p>
                    <p>
                        {formValues.lastname} {formValues.mother_last_name}
                    </p>
                    <p>{formValues.email}</p>
                    <p>{formValues.phoneNumber}</p>
                    <p>{formValues.address}</p>
                    <p>{formValues.referencePlace}</p>
                    <p>{formValues.dateBirth.toDateString()}</p>
                    <p>{formValues.membership}</p>
                    <p>{formValues.paymentMethod}</p>
                </div>
            </div>
        </div>
    );
};

export default SummarySignUpForm;
