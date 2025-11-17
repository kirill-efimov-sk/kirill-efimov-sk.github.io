import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ProductCard } from 'src/features/product/card';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersactionObserverScroll } from 'src/hooks/useIntersactionObserverScroll';
import { productsSelectors, ProductsState } from 'src/app/store/slices/products';
import styles from './productList.module.scss';

interface ProductListRenderProps {
  onLoadMore: () => void;
  isLoading: boolean;
  hasMoreItems: boolean;
}

export const ProductListRender: FC<ProductListRenderProps> = ({ onLoadMore, isLoading, hasMoreItems }) => {
  const { t } = useTranslation();
  const { isLoading: scrollLoading, observerTarget } = useIntersactionObserverScroll({
    onLoadMore,
    delay: 250,
    hasMoreItems,
  });
  const products: ProductsState = useSelector(productsSelectors.get);

  if (products.length === 0 && !isLoading) {
    return <div className={styles.emptyList}>{t('screens.ProductScreen.list.empty')}</div>;
  }
  return (
    <>
      <div className={styles.productList}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} cardId={product.id}></ProductCard>;
        })}
      </div>

      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={(isLoading || scrollLoading) && hasMoreItems} targetRef={observerTarget} />
    </>
  );
};
