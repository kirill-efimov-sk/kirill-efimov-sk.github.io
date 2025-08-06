import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { OperationDetailCard } from 'src/features/operation/detailCard';
import { OperationCard } from 'src/features/operation/card';
import { Operation } from 'src/utils/dataListGenerator';
import styles from './operationList.module.scss';

interface OperationListProps {
  operations: Operation[];
  onLoadMore: () => void;
}

export const OperationListRender: FC<OperationListProps> = ({ operations, onLoadMore }) => {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      onLoadMore();
      setIsLoading(false);
    }, 250);
  }, [isLoading, onLoadMore]);

  useEffect(() => {
    const targetElement = observerTarget.current as HTMLDivElement;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(targetElement);

    return () => observer.unobserve(targetElement);
  }, [isLoading, handleLoadMore]);

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
      <div className={styles.operationLoader}>
        <div ref={observerTarget} aria-hidden="true" />

        {isLoading && <div>Загрузка...</div>}
      </div>
    </>
  );
};
