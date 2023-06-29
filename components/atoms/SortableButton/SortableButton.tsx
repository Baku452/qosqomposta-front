import { SortCriteria } from '@/types/mainTypes';
import { useState } from 'react';
import { BiSortDown, BiSortUp } from 'react-icons/bi';
import { FaSort } from 'react-icons/fa';

export interface SortableButtonProps {
  order: SortCriteria;
  action: () => void;
}
const SortableButton: React.FC<SortableButtonProps> = ({ order, action }) => {
  const [direction, setDirection] = useState<SortCriteria | null>(null);

  const toggleSortDirection = (currentDirection: SortCriteria) => {
    if (currentDirection === 'asc') {
      setDirection('desc');
    } else if (currentDirection === 'desc') {
      setDirection(null);
    } else {
      setDirection('asc');
    }
  };
  return (
    <button
      onClick={() => {
        toggleSortDirection(direction);
        action();
      }}
    >
      {direction === 'asc' && <BiSortUp />}
      {direction === 'desc' && <BiSortDown />}
      {direction === null && <FaSort />}
    </button>
  );
};

export default SortableButton;
