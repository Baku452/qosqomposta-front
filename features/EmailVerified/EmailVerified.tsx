import { FaCheck, FaInfoCircle } from 'react-icons/fa';

export interface EmailVerifiedProps {
  isVerified: boolean;
}
const EmailVerified: React.FC<EmailVerifiedProps> = ({ isVerified }) => {
  return (
    <div>
      <button
        className={`btn flex items-center gap-3 rounded-r-xl font-paragraph !text-[14px] !font-normal capitalize !leading-none !tracking-normal ${isVerified ? 'bg-green-500' : 'bg-error'} p-2 text-white`}
      >
        {isVerified ? <FaCheck /> : <FaInfoCircle />}
        {isVerified ? 'Correo Verificado' : 'Correo No verificado'}
      </button>
    </div>
  );
};

export default EmailVerified;
