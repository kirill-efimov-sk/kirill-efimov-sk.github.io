import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { OperationDetailCard } from 'src/features/operation/detailCard';
import { OperationCard } from 'src/features/operation/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersactionObserverScroll } from 'src/hooks/useIntersactionObserverScroll';
import { operationsSelectors, OperationsState } from 'src/app/store/slices/operations';
import styles from './operationList.module.scss';

interface OperationListProps {
  onLoadMore: () => void;
}

export const OperationListRender: FC<OperationListProps> = ({ onLoadMore }) => {
  const { t } = useTranslation();
  const { isLoading, observerTarget } = useIntersactionObserverScroll({
    onLoadMore,
    delay: 250,
  });
  const operations: OperationsState = useSelector(operationsSelectors.get);

  if (operations.length === 0 && !isLoading) {
    return <div className={styles.endMessage}>{t('screens.OperationScreen.list.empty')}</div>;
  }
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
