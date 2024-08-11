export interface EditSingleServiceProps {
  service: any;
  toggleEditMode: (value: boolean) => void;
}
export const EditSingleService: React.FC<EditSingleServiceProps> = ({
  service,
  toggleEditMode,
}) => {
  return (
    <form>
      <label>
        Nombre
        <span className="text-error">*</span>
      </label>
      <input onBlur={() => toggleEditMode(false)} value={service.name} />
    </form>
  );
};
