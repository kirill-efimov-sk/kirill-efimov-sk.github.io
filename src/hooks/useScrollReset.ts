import { useCallback } from 'react';

export const useScrollReset = () => {
  const resetScroll = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return resetScroll;
};
