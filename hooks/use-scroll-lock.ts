import { useEffect } from 'react';

export const useScrollLock = (shouldLock: boolean): void => {
  useEffect((): (() => void) => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    }

    return () => document.body.style.overflow = originalStyle;
  }, [shouldLock]);
};