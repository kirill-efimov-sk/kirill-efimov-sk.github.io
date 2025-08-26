import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useResizeObserver = (
  targetRef: RefObject<Element>,
  onResize: (entry: ResizeObserverEntry) => void
): {
  startResizeObserving: () => void;
  stopResizeObserving: () => void;
  disconnectResizeObserver: () => void;
} => {
  const observerRef = useRef<ResizeObserver | null>(null);
  const onResizeRef = useRef(onResize);

  // Обновляем ref при изменении onResize
  useEffect(() => {
    onResizeRef.current = onResize;
  }, [onResize]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        onResizeRef.current(entry);
      }
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect(); // Очистка при размонтировании
    };
  }, []);

  const startResizeObserving = useCallback(() => {
    if (targetRef.current) observerRef.current?.observe(targetRef.current);
  }, [targetRef]);

  const stopResizeObserving = useCallback(() => {
    if (targetRef.current) observerRef.current?.unobserve(targetRef.current);
  }, [targetRef]);

  const disconnectResizeObserver = useCallback(() => {
    observerRef.current?.disconnect();
  }, []);

  // Автоматически начинаем наблюдение при монтировании
  useEffect(() => {
    startResizeObserving();
    return () => stopResizeObserving();
  }, [startResizeObserving, stopResizeObserving]);

  return { startResizeObserving, stopResizeObserving, disconnectResizeObserver };
};
