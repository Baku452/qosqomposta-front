import { FaCalendar, FaUserTag } from 'react-icons/fa';
import Badge from './Badge/Badge';
import { FaCircleInfo } from 'react-icons/fa6';
import { IconBaseProps } from 'react-icons';
import styles from './StatusClient.module.scss';
import ButtonCertificate from './ButtonCertificate/ButtonCertificate';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { DEFAULT_TIMEZONE, LOCALE_DATE_STRING_FORMAT } from '@/main.config';

export interface StatusClientProps {
  showCertificate?: boolean;
}
const StatusClient: React.FC<StatusClientProps> = ({ showCertificate }) => {
  const iconProps: IconBaseProps = {
    className: styles.iconBadge,
    size: 30,
  };

  const subscriptionSummary = useSelector(
    (state: State) => state.customerApp.subscriptionSummary,
  );

  return (
    <div className="mx-5 mt-5 flex w-fit flex-col items-center justify-between gap-4 lg:mx-0 lg:mt-0 lg:w-full lg:flex-row">
      <h2 className="block self-start px-5 lg:hidden">Resumen de Tu Servicio</h2>
      <section className="flex w-full grow flex-col justify-evenly gap-5 rounded-lg bg-white p-5 shadow-lg lg:w-auto lg:flex-row lg:gap-0">
        <Badge
          icon={<FaUserTag {...iconProps} />}
          header={'Categoría'}
          content={subscriptionSummary?.category ?? '--'}
        />
        <Badge
          icon={<FaCalendar {...iconProps} />}
          header={'Fecha de Inicio'}
          content={
            subscriptionSummary?.startDate
              ? new Date(subscriptionSummary?.startDate).toLocaleDateString(
                  DEFAULT_TIMEZONE,
                  {
                    ...LOCALE_DATE_STRING_FORMAT,
                  },
                )
              : '--'
          }
        />
        <Badge
          icon={<FaCircleInfo {...iconProps} />}
          header={'Estado'}
          content={subscriptionSummary?.status ?? '--'}
        />
      </section>
      {showCertificate && <ButtonCertificate />}
    </div>
  );
};

export default StatusClient;
