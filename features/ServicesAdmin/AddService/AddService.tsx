import { IoAddCircleOutline } from 'react-icons/io5';

export const AddService: React.FC = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-md transition hover:bg-gray-100">
      <IoAddCircleOutline className="text-greenQ" size={50} />
      <p className="font-bold text-greenQ">Agregar Proyecto</p>
    </div>
  );
};
