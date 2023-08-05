import { FaUserSlash } from 'react-icons/fa';

const RowActions: React.FC = () => {
  const handleDisableUser = () => {
    console.log('Disable user');
  };
  return (
    <>
      <button onClick={handleDisableUser}>
        <FaUserSlash />
      </button>
    </>
  );
};
export default RowActions;
