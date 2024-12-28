import { FaFile } from 'react-icons/fa';

const ButtonCertificate: React.FC = () => {
  return (
    <button
      disabled
      className="btn btn-primary flex h-fit items-center gap-2 !bg-greenQ !font-paragraph !text-white"
    >
      <FaFile />
      Certificado Q
    </button>
  );
};

export default ButtonCertificate;
