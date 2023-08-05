import { useEffect, RefObject } from 'react';

type Callback = () => void;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  callback: Callback,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [elementRef, callback]);
};
