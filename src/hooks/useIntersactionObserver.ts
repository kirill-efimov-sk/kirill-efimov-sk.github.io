import { RefObject, useCallback, useEffect, useRef } from 'react';

type IntersectionCallback = () => Promise<void> | void;

export const useIntersectionObserver = (
  targetRef: RefObject<Element>,
  options?: IntersectionObserverInit
): {
  startObserving: (callback: IntersectionCallback) => void;
  stopObserving: () => void;
  isObserving: boolean;
} => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const startObserving = useCallback(
    (callback: IntersectionCallback) => {
      if (observerRef.current || !targetRef.current) return;

      observerRef.current = new IntersectionObserver(
        async (entries) => {
          const isIntersecting = entries[0].isIntersecting;
          if (isIntersecting && callback) {
            try {
              callback();
            } catch (error) {
              console.error('IntersectionObserver callback error:', error);
            }
          }
        },
        { threshold: 0.1, ...options }
      );

      observerRef.current.observe(targetRef.current);
    },
    [targetRef, options]
  );

  const stopObserving = useCallback(() => {
    if (observerRef.current && targetRef.current) {
      observerRef.current.unobserve(targetRef.current);
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return stopObserving;
  }, [stopObserving]);

  return { startObserving, stopObserving, isObserving: !!observerRef.current };
};
