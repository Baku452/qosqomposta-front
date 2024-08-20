import { FaFile } from 'react-icons/fa';

const ButtonCertificate: React.FC = () => {
  return (
    <button className="btn btn-primary !bg-greenQ flex items-center !text-white gap-2 !font-paragraph h-fit">
      <FaFile />
      Certificado Q
    </button>
  );
};

export default ButtonCertificate;
