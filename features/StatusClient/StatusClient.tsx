import { FaCalendar, FaUserTag } from 'react-icons/fa';
import Badge from './Badge/Badge';
import { FaCircleInfo } from 'react-icons/fa6';
import { IconBaseProps } from 'react-icons';
import styles from './StatusClient.module.scss';

const StatusClient: React.FC = () => {
  const iconProps: IconBaseProps = {
    className: styles.iconBadge,
    size: 30,
  };
  return (
    <section className="flex w-full justify-evenly shadow-lg rounded-lg p-5 bg-white">
      <Badge icon={<FaUserTag {...iconProps} />} header={'Categoría'} content="Familia" />
      <Badge
        icon={<FaCalendar {...iconProps} />}
        header={'Fecha de Inicio'}
        content="Ene 17 2024"
      />
      <Badge icon={<FaCircleInfo {...iconProps} />} header={'Estado'} content="Activo" />
    </section>
  );
};

export default StatusClient;
