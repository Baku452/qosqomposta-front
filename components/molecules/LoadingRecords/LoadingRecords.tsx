import Spinner from '@/components/atoms/Spinner/Spinner';

const LoadingRecords: React.FC = () => {
  return (
    <div className="flex h-28 w-full flex-col items-center bg-white py-4 text-gray-400">
      <p className="mb-4">Cargando Registros</p>
      <Spinner size="md" color="#b4b4b4" />
    </div>
  );
};

export default LoadingRecords;
