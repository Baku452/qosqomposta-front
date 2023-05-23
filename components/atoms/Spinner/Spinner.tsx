import React from 'react';
import styles from './spinner.module.scss';

const ResponsiveClasses = {
  lg: 'h-20 w-20',
  md: 'h-10 w-10',
  sm: 'h-7 w-7',
};

export interface SpinnerProps {
  size?: keyof typeof ResponsiveClasses;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = '#fff' }) => {
  const classNames = size ? ResponsiveClasses[size] : ResponsiveClasses.md;
  return (
    <span
      className={`${styles.loader} ${classNames} `}
      style={{
        borderColor: `${color}`,
      }}
    ></span>
  );
};

export default Spinner;
