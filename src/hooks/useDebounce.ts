import { useRef } from 'react';

export const useDebounce = (fn: any, delay: number) => {
  const timeoutRef: any = useRef(null);

  function debouncedFn(...args: any) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
};
