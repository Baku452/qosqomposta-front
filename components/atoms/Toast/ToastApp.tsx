import React from 'react';
import { toast } from 'react-toastify';

// Components
import { ToastProps } from 'react-toastify/dist/types';
import Spinner from '../Spinner/Spinner';

export type ToastPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'top-right'
  | 'top-left'
  | 'top-center';
export type ToastType = 'info' | 'success' | 'warning' | 'error';

const options: Partial<ToastProps> = {
  autoClose: 4000,
  type: toast.TYPE.INFO,
  hideProgressBar: false,
  position: toast.POSITION.TOP_LEFT,
  pauseOnHover: true,
};

export interface ButtonProps {
  label: string;
  handleClick: () => Promise<void>;
  loading?: boolean;
}

export interface ToastContentProps {
  message: string;
  button?: ButtonProps;
  secondaryButton?: ButtonProps;
}
export const ToastContent: React.FC<ToastContentProps> = ({
  message,
  button,
  secondaryButton,
}) => {
  return (
    <div className="p-2">
      <div>{message}</div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {button && (
          <button onClick={button.handleClick} className="btn btn-primary !text-sm">
            {button.loading && <Spinner size="sm" />}
            {button.label}
          </button>
        )}
        {secondaryButton && (
          <button
            onClick={() => secondaryButton.handleClick()}
            className="btn btn-primary !text-sm"
          >
            {secondaryButton.loading && <Spinner size="sm" />}
            {secondaryButton.label}
          </button>
        )}
      </div>
    </div>
  );
};

export interface CreateToastProps {
  toastId: string;
  toastType?: ToastType;
  toastPosition?: ToastPosition;
  message: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  autoClose?: false | number;
}
export const createToast = ({
  toastId,
  message,
  toastType,
  toastPosition,
  autoClose = 4000,
  primaryButton,
  secondaryButton,
}: CreateToastProps) => {
  return toast(
    <ToastContent
      message={message}
      button={primaryButton}
      secondaryButton={secondaryButton}
    />,
    {
      ...options,
      toastId: toastId,
      type: toastType,
      position: toastPosition,
      autoClose: autoClose ?? 4000,
    },
  );
};
