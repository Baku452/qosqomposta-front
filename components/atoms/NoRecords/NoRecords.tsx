import { BiSearch } from 'react-icons/bi';

export interface NoRecordsProps {
  message?: string;
}
export const NoRecords: React.FC<NoRecordsProps> = ({ message }) => {
  return (
    <div className="text-gray-500 text-center flex flex-col items-center p-5">
      <BiSearch size={30} />
      <h3 className="font-paragraph">
        {message ? message : 'No se han encontrado resultados'}
      </h3>
    </div>
  );
};
