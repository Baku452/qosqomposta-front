import { BiSearch } from 'react-icons/bi';

const NoRecords: React.FC = () => {
  return (
    <div className="text-gray-500 text-center flex flex-col items-center p-5">
      <BiSearch size={30} />
      <h3 className="font-paragraph">No se han encontrado resultados</h3>
    </div>
  );
};

export default NoRecords;
