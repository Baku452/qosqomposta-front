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
        <div className="w-full text-center mt-16 flex gap-1 justify-center">
            <button
                disabled={steps === 0}
                className="!w-40 btn btn-primary m-0"
                onClick={decreaseStep}
            >
                Atras
            </button>
            <button
                disabled={steps === maxSteps}
                className="!w-40 btn btn-primary m-0"
                onClick={increaseStep}
            >
                Siguiente
            </button>
        </div>
    );
};

export default StepsButton;
