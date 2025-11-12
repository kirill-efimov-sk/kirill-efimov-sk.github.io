import { useCallback, useMemo, useState } from 'react';

export const useIntersactionObserverLoader = <T>(items: T[], SectionSize = 10) => {
  const [currentSection, setCurrentSection] = useState(0);

  const visibleItems = useMemo(
    () => items.slice(0, (currentSection + 1) * SectionSize),
    [items, currentSection, SectionSize]
  );

  const hasMoreItems = visibleItems.length < items.length;

  const handleLoadMore = useCallback(() => {
    if (hasMoreItems) {
      setCurrentSection((prev) => prev + 1);
    }
  }, [hasMoreItems]);

  const resetPagination = useCallback(() => {
    setCurrentSection(0);
  }, []);

  return {
    visibleItems,
    handleLoadMore,
    resetPagination,
    currentSection,
  };
};
