import React from 'react';
import styles from './spinner.module.scss';

const ResponsiveClasses = {
  lg: 'h-20 w-20',
  md: 'h-10 w-10',
  sm: 'h-7 w-7',
  xs: 'h-4 w-4',
};

export interface SpinnerProps {
  className?: string;
  size?: keyof typeof ResponsiveClasses;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className, size = 'md', color = '#fff' }) => {
  const classNames = size ? ResponsiveClasses[size] : ResponsiveClasses.md;
  return (
    <span
      className={`${styles.loader} ${classNames} ${className} mx-2`}
      style={{
        borderColor: `${color}`,
      }}
    ></span>
  );
};

export default Spinner;
