import { WasteService } from '@/types/wasteManagement';
import { convertPriceToString } from '@/utils/utils';

export interface DefaultSingleServiceProps {
  service: WasteService;
  toggleEditMode: (value: boolean) => void;
}
export const DefaultSingleService: React.FC<DefaultSingleServiceProps> = ({
  service,
  toggleEditMode,
}) => {
  return (
    <div>
      <label>Nombre</label>
      <p onClick={() => toggleEditMode(true)}>{service.name}</p>

      <label>Precio</label>
      <p onClick={() => toggleEditMode(true)}>{convertPriceToString(service.price)}</p>

      <label>Tipo de Servicio</label>
      {/* <p className="capitalize" onClick={() => toggleEditMode(true)}>
        {service.type}
      </p>

      <label>Modalidad</label>
      <p className="capitalize" onClick={() => toggleEditMode(true)}>
        {service.modality}
      </p>

      <label>Dias de Recojo</label>
      <p className="capitalize" onClick={() => toggleEditMode(true)}>
        {service.pick_up_days}
      </p> */}
    </div>
  );
};
