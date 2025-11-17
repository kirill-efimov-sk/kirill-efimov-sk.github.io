import { useState, useRef, useCallback, useEffect } from 'react';
import { useIntersectionObserver } from 'src/hooks/useIntersactionObserver';

interface useIntersactionObserverScrollProps {
  onLoadMore: () => void;
  delay?: number;
  hasMoreItems?: boolean;
}

export const useIntersactionObserverScroll = ({
  onLoadMore,
  delay = 250,
  hasMoreItems = true,
}: useIntersactionObserverScrollProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  const delayRef = useRef(delay);

  const { startObserving, stopObserving } = useIntersectionObserver(observerTarget, { rootMargin: '50px' });

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      onLoadMoreRef.current();
      setIsLoading(false);
    }, delayRef.current);
  }, []);

  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
    delayRef.current = delay;
  });

  useEffect(() => {
    if (hasMoreItems) startObserving(handleLoadMore);

    return () => {
      stopObserving();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startObserving, stopObserving, handleLoadMore, hasMoreItems]);

  return {
    isLoading,
    observerTarget,
  };
};
