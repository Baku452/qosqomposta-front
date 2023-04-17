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
    idToast: string;
    toastType: ToastType;
    toastPosition: ToastPosition;
    content: ToastContentProps;
}
export const createToast = ({
    idToast,
    content,
    toastType,
    toastPosition,
}: CreateToastProps) => {
    return toast(<ToastContent message={content.message} />, {
        ...options,
        toastId: idToast,
        type: toastType,
        position: toastPosition,
    });
};
