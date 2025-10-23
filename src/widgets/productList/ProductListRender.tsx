import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ProductCard } from 'src/features/product/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersectionObserver } from 'src/hooks/useIntersactionObserver';
import { Product } from 'src/utils/dataListGenerator';
import styles from './productList.module.scss';

interface ProductListRenderProps {
  products: Product[];
  onLoadMore: () => void;
}

export const ProductListRender: FC<ProductListRenderProps> = ({ products, onLoadMore }) => {
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
  }, [onLoadMore]);

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
      <div className={styles.productList}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              description={product.desc}
              price={product.price}
              name={product.name}
              cardId={product.id}
              image={{
                url: product.foto,
                title: 'Изображение товара',
              }}
            ></ProductCard>
          );
        })}
      </div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
