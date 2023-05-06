import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

//Styles
import styles from './summaryform.module.scss';
import QosqompostaServicesContext, {
    ServiceContextType,
} from '@/context/ServicesContext';
import { BsPencilSquare } from 'react-icons/bs';

const SummarySignUpForm: React.FC = () => {
    const { formState } = useContext(SignUpContext) as SignUpContextType;
    const { selectedService } = useContext(
        QosqompostaServicesContext,
    ) as ServiceContextType;

    const { handleSubmit, getValues } = useForm({ defaultValues: formState });

    const formValues = getValues();

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
                    <p>Servicio Seleccionado</p>
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
                    <p>{formValues?.dateBirth?.toDateString()}</p>
                    <div className="flex items-center">
                        <p className="block h-fit">{selectedService?.name}</p>
                        <BsPencilSquare
                            title="Cambiar"
                            className="text-greenQ"
                            size={20}
                        />
                    </div>
                    <p>{formValues.paymentMethod}</p>
                </div>
            </div>
        </div>
    );
};

export default SummarySignUpForm;
