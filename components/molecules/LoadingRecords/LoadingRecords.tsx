import Spinner from '@/components/atoms/Spinner/Spinner';

const LoadingRecords: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-gray-400">
      <p className="mb-4">Cargando Registros</p>
      <Spinner size="md" color="#b4b4b4" />
    </div>
  );
};

export default LoadingRecords;
