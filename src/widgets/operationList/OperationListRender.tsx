import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { OperationDetailCard } from 'src/features/operation/detailCard';
import { OperationCard } from 'src/features/operation/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { Operation } from 'src/utils/dataListGenerator';
import { useIntersectionObserver } from 'src/hooks/useIntersactionObserver';
import styles from './operationList.module.scss';

interface OperationListProps {
  operations: Operation[];
  onLoadMore: () => void;
}

export const OperationListRender: FC<OperationListProps> = ({ operations, onLoadMore }) => {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const { startObserving, stopObserving } = useIntersectionObserver(observerTarget);

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      onLoadMore();
      setIsLoading(false);
    }, 250);
  }, [isLoading, onLoadMore]);

  useEffect(() => {
    startObserving(handleLoadMore);
    return () => {
      stopObserving();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startObserving, stopObserving, handleLoadMore]);

  return (
    <>
      <div className={styles.operationList}>
        {operations.map((operation) => {
          if ('createdAt' in operation) {
            return (
              <OperationDetailCard
                key={operation.id}
                price={operation.amount}
                category={operation.category.name}
                name={operation.name}
                description={operation.desc}
                date={new Date(operation.createdAt)}
              />
            );
          }
          return (
            <OperationCard
              key={operation.id}
              price={operation.amount}
              category={operation.category.name}
              name={operation.name}
              description={operation.desc}
            />
          );
        })}
      </div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
