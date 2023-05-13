import Image from 'next/image';
import { AiFillCreditCard, AiTwotoneBank } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { useContext, useEffect, useState } from 'react';
//Styles
import styles from './paymentMethod.module.scss';
import registerStyles from '../signUp.module.scss';

//Context
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
export interface PaymentMethods {
  name: string;
  image?: string;
  icon?: React.ReactNode;
}

const iconsSize = 100;
export const PAYMENT_METHODS: PaymentMethods[] = [
  {
    name: 'Yape / Plin',
    image: '/images/YapeIcon.png',
  },
  {
    name: 'Transferencia Bancaria',
    icon: <AiTwotoneBank size={iconsSize} />,
  },
  {
    name: 'Efectivo',
    icon: <FaRegMoneyBillAlt size={iconsSize} />,
  },
  {
    name: 'Tarjeta de Crédito',
    icon: <AiFillCreditCard size={iconsSize} />,
  },
];

export interface StepPaymentMethodProps {
  currentStep: number;
  paymentMethodSelected: string | undefined;
  handleStepForm: (valueStep: number, isValid: boolean) => void;
  setPaymentMethodSelected: (value: string) => void;
  increaseStep: () => void;
}

const StepPaymentMethod: React.FC<StepPaymentMethodProps> = ({
  currentStep,
  handleStepForm,
  paymentMethodSelected,
  setPaymentMethodSelected,
  increaseStep,
}) => {
  const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;
  const [noMethodSelected, setNoMethodSelected] = useState<boolean>(false);
  const handleClick = () => {
    if (paymentMethodSelected) {
      increaseStep();
      return;
    }
    setNoMethodSelected(true);
  };

  useEffect(() => {
    if (paymentMethodSelected && formState) {
      setFormState({
        ...formState,
        paymentMethod: paymentMethodSelected,
      });
    }

    if (paymentMethodSelected) {
      handleStepForm(currentStep, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethodSelected]);
  return (
    <section className="flex flex-col justify-between">
      <div>
        <h2 className="mb-10 text-center">Seleccione su método de pago</h2>
        <div className="flex justify-evenly flex-wrap">
          {PAYMENT_METHODS.map(method => (
            <div
              onClick={() => setPaymentMethodSelected(method.name)}
              key={method.name}
              className={`${
                paymentMethodSelected === method.name ? styles.activeCard : ''
              } hover:bg-yellowQ hover:text-white cursor-pointer transition-colors rounded-lg flex flex-col justify-between items-center shadow-md mb-8 basis-5/12 p-5`}
            >
              {method.image && (
                <Image width={100} height={100} alt={method.name} src={method.image} />
              )}
              {method.icon && method.icon}
              <p className="text-black mt-10">{method.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center py-4 h-[52px]">
          {noMethodSelected && (
            <p className={registerStyles.errorLabel}>Seleccione un método de Pago</p>
          )}
        </div>
      </div>

      <button onClick={handleClick} className="btn btn-primary m-auto text-center block">
        Siguiente
      </button>
    </section>
  );
};

export default StepPaymentMethod;
