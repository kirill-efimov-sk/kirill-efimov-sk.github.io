import React, { FC, useMemo } from 'react';
import { ProductItem } from 'src/features/cart/ui/productItem';
import { Loader } from 'src/shared/loaders/intersactionObserver';
import { useIntersactionObserverScroll } from 'src/hooks/useIntersactionObserverScroll';
import { CartProductItemProps } from 'src/pages/cartScreen';
import styles from './cartList.module.scss';

interface CartListRenderProps {
  products: CartProductItemProps[];
  onLoadMore: () => void;
}

export const CartListRender: FC<CartListRenderProps> = ({ products, onLoadMore }) => {
  const { isLoading, observerTarget } = useIntersactionObserverScroll({
    onLoadMore,
    delay: 250,
  });

  const memoizedCartItems = useMemo(() => {
    return products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          cardId={product.id}
          image={{
            url: product.foto,
            title: 'Изображение товара',
          }}
          price={product.price}
          name={product.name}
          quantity={product.quantity}
        />
      );
    });
  }, [products]);

  return (
    <>
      <div className={styles.cartList}>{memoizedCartItems}</div>
      {/* Добавляем триггерный элемент для подгрузки */}
      <Loader isLoading={isLoading} targetRef={observerTarget} />
    </>
  );
};
