import Image from 'next/image';
import { AiFillCreditCard, AiTwotoneBank } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

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

const StepPaymentMethod: React.FC = () => {
    return (
        <section>
            <h2 className="mb-10">Seleccione su método de pago</h2>
            <div className="flex justify-evenly flex-wrap">
                {PAYMENT_METHODS.map(method => (
                    <div
                        key={method.name}
                        className="hover:bg-yellowQ hover:text-white cursor-pointer transition-colors rounded-lg flex flex-col justify-between items-center shadow-md mb-8 basis-5/12 p-5"
                    >
                        {method.image && (
                            <Image
                                width={100}
                                height={100}
                                alt={method.name}
                                src={method.image}
                            />
                        )}
                        {method.icon && method.icon}
                        <p className="text-black mt-10">{method.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StepPaymentMethod;
