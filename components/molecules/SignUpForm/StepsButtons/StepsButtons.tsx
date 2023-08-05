import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export interface StepsButtonProps {
  steps: number;
  maxSteps: number;
  increaseStep: () => void;
  decreaseStep?: () => void;
}
const StepsButton: React.FC<StepsButtonProps> = ({
  steps,
  maxSteps,
  increaseStep,
  decreaseStep,
}) => {
  return (
    <div className="w-full text-center flex gap-1 justify-center">
      <button disabled={steps === 0} className=" m-0" onClick={decreaseStep}>
        <FaAngleLeft size={30} />
      </button>
      <button disabled={steps === maxSteps} className=" m-0" onClick={increaseStep}>
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

export default StepsButton;
