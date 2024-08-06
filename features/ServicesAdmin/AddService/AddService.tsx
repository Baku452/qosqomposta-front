import { IoAddCircleOutline } from 'react-icons/io5';

export const AddService: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md py-4 px-5 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center flex-col">
      <IoAddCircleOutline className="text-greenQ" size={50} />
      <p className="font-bold text-greenQ">Agregar Proyecto</p>
    </div>
  );
};
