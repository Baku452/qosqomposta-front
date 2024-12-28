import { useState } from 'react';
import styles from './ButtonController.module.scss';

export interface ButtonData {
  value: boolean;
  label: string;
}
export interface ButtonControllerProps {
  children: React.ReactNode;
}
export const ButtonController: React.FC<ButtonControllerProps> = ({ children }) => {
  return <div className="flex flex-row">{children}</div>;
};

export const ButtonBox: React.FC<ButtonData> = data => {
  const [buttonChecked] = useState<boolean>(data.value);
  return (
    <button className={`${styles.button} ${buttonChecked ? styles.button__active : ''}`}>
      {data.label}
    </button>
  );
};
