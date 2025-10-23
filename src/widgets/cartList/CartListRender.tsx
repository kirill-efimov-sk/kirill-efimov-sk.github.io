import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ProductItem } from 'src/features/cart/ui/productItem';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersectionObserver } from 'src/hooks/useIntersactionObserver';
import { Product } from 'src/utils/dataListGenerator';
import styles from './cartList.module.scss';

interface CartListRenderProps {
  products: Product[];
  onLoadMore: () => void;
}

export const CartListRender: FC<CartListRenderProps> = ({ products, onLoadMore }) => {
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
      <div className={styles.cartList}>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={{
                url: product.foto,
                title: 'Изображение товара',
              }}
              price={product.price}
              name={product.name}
              quantity={1}
            />
          );
        })}
      </div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
