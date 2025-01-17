import React from 'react';
import { IconType } from 'react-icons';
import { BiSearch } from 'react-icons/bi';

export interface NoRecordsProps {
  message?: string;
  CustomIcon?: IconType;
  iconSize?: number;
  className?: string;
  messageClassname?: string;
}

export const NoRecords: React.FC<NoRecordsProps> = ({
  message = 'No se han encontrado resultados',
  CustomIcon,
  iconSize = 30,
  className,
  messageClassname,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center p-5 text-center text-gray-500`}
    >
      {CustomIcon ? <CustomIcon size={iconSize} /> : <BiSearch size={iconSize} />}
      <h3 className={`font-paragraph ${messageClassname}`}>{message}</h3>
    </div>
  );
};

export default NoRecords;
