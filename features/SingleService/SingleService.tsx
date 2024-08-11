import { useCallback, useRef, useState } from 'react';
import styles from './editSingleService.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside';
import { EditSingleService } from './EditServiceForm';
import { DefaultSingleService } from './DefaultSingleService';

export interface SingleServiceProps {
  service: any;
}
export const SingleService: React.FC<SingleServiceProps> = ({ service }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const containerForm = useRef(null);
  const toggleEditMode = useCallback(
    (value: boolean) => {
      setEditMode(value);
    },
    [editMode],
  );

  useClickOutside(containerForm, () => toggleEditMode(false));
  return (
    <section
      ref={containerForm}
      className={`bg-white px-5 rounded-2xl ${styles.formEditService}`}
    >
      <div onClick={e => e.stopPropagation()}>
        {editMode ? (
          <EditSingleService service={service} toggleEditMode={toggleEditMode} />
        ) : (
          <DefaultSingleService service={service} toggleEditMode={toggleEditMode} />
        )}
      </div>
    </section>
  );
};
