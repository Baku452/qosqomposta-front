import { FaCalendar, FaUser } from 'react-icons/fa';
import Badge from './Badge/Badge';
import { FaCircleInfo } from 'react-icons/fa6';

const StatusClient: React.FC = () => {
  return (
    <section className="flex w-full justify-evenly shadow-lg rounded-lg p-5 bg-white">
      <Badge icon={<FaUser />} header={'Categoría'} content="Familia" />
      <Badge icon={<FaCalendar />} header={'Fecha de Inicio'} content="Ene 17 2024" />
      <Badge icon={<FaCircleInfo />} header={'Estado'} content="Activo" />
    </section>
  );
};

export default StatusClient;
