import React from 'react';
import { toast } from 'react-toastify';

// Components
import { Toast } from 'react-toastify/dist/components';
import { ToastProps } from 'react-toastify/dist/types';

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
  onClick: () => void;
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
    <>
      {message}
      {button && (
        <button onClick={button.onClick} className="btn btn-primary">
          {button.label}
        </button>
      )}
      {secondaryButton && (
        <button onClick={secondaryButton.onClick} className="btn btn-primary">
          {secondaryButton.label}
        </button>
      )}
    </>
  );
};

export interface CreateToastProps {
  toastId: string;
  toastType?: ToastType;
  toastPosition?: ToastPosition;
  message: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}
export const createToast = ({
  toastId,
  message,
  toastType,
  toastPosition,
}: CreateToastProps) => {
  return toast(<ToastContent message={message} />, {
    ...options,
    toastId: toastId,
    type: toastType,
    position: toastPosition,
  });
};
