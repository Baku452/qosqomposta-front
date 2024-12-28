import { FaCalendar, FaUserTag } from 'react-icons/fa';
import Badge from './Badge/Badge';
import { FaCircleInfo } from 'react-icons/fa6';
import { IconBaseProps } from 'react-icons';
import styles from './StatusClient.module.scss';
import ButtonCertificate from './ButtonCertificate/ButtonCertificate';
import { useSelector } from 'react-redux';
import { State } from '@/reducers/rootReducer';
import { DEFAULT_TIMEZONE, LOCALE_DATE_STRING_FORMAT } from '@/main.config';

const StatusClient: React.FC = () => {
  const iconProps: IconBaseProps = {
    className: styles.iconBadge,
    size: 30,
  };

  const subscriptionSummary = useSelector(
    (state: State) => state.customerApp.subscriptionSummary,
  );

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <section className="flex grow justify-evenly rounded-lg bg-white p-5 shadow-lg">
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
      <ButtonCertificate />
    </div>
  );
};

export default StatusClient;
