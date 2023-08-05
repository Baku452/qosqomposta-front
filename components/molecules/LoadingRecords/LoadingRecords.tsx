import Spinner from '@/components/atoms/Spinner/Spinner';

const LoadingRecords: React.FC = () => {
  return (
    <div className="w-full h-28 bg-white py-4 flex flex-col items-center text-gray-400">
      <p className="mb-4">Cargando Registros</p>
      <Spinner size="md" color="#b4b4b4" />
    </div>
  );
};

export default LoadingRecords;
