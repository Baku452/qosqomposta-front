import { MdCompost } from 'react-icons/md';

const NoPageAvailable: React.FC = () => {
  return (
    <div className="m-auto flex h-full w-full flex-col items-center justify-center text-center">
      <h2 className="mb-8 text-5xl text-gray-400">Página en construcción</h2>
      <MdCompost className="text-gray-400" size={100} />
    </div>
  );
};

export default NoPageAvailable;
