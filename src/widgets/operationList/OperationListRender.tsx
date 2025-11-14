import React, { FC } from 'react';
import { OperationDetailCard } from 'src/features/operation/detailCard';
import { OperationCard } from 'src/features/operation/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersactionObserverScroll } from 'src/hooks/useIntersactionObserverScroll';
import { Operation } from 'src/utils/dataListGenerator';
import styles from './operationList.module.scss';

interface OperationListProps {
  operations: Operation[];
  onLoadMore: () => void;
}

export const OperationListRender: FC<OperationListProps> = ({ operations, onLoadMore }) => {
  const { isLoading, observerTarget } = useIntersactionObserverScroll({
    onLoadMore,
    delay: 250,
  });

  return (
    <>
      <div className={styles.operationList}>
        {operations.map((operation) => {
          if ('createdAt' in operation) {
            return (
              <OperationDetailCard
                key={operation.id}
                cardId={`operation-${operation.id}`}
                operation={{
                  id: operation.id,
                  price: operation.amount,
                  category: operation.category.name,
                  name: operation.name,
                  description: operation.desc,
                  date: operation.createdAt,
                }}
              />
            );
          }
          return (
            <OperationCard
              key={operation.id}
              cardId={`operation-${operation.id}`}
              operation={{
                id: operation.id,
                price: operation.amount,
                category: operation.category.name,
                name: operation.name,
                description: operation.desc,
              }}
            />
          );
        })}
      </div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
