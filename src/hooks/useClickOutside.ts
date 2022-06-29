import { useEffect } from 'react';

type OutsideClickProps = {
  ref: any;
  callback: () => void;
};

export const useClickOutside = ({ ref, callback }: OutsideClickProps) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
