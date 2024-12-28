import { BiSearch } from 'react-icons/bi';

export interface NoRecordsProps {
  message?: string;
}
export const NoRecords: React.FC<NoRecordsProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center p-5 text-center text-gray-500">
      <BiSearch size={30} />
      <h3 className="font-paragraph">
        {message ? message : 'No se han encontrado resultados'}
      </h3>
    </div>
  );
};
