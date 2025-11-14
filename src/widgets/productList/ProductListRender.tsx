import React, { FC } from 'react';
import { ProductCard } from 'src/features/product/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersactionObserverScroll } from 'src/hooks/useIntersactionObserverScroll';
import { Product } from 'src/utils/dataListGenerator';
import styles from './productList.module.scss';

interface ProductListRenderProps {
  products: Product[];
  onLoadMore: () => void;
}

export const ProductListRender: FC<ProductListRenderProps> = ({ products, onLoadMore }) => {
  const { isLoading, observerTarget } = useIntersactionObserverScroll({
    onLoadMore,
    delay: 250,
  });

  return (
    <>
      <div className={styles.productList}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} cardId={product.id}></ProductCard>;
        })}
      </div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
