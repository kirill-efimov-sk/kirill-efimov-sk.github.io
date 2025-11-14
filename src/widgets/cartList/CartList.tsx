import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { CartListRender } from './CartListRender';
import { cartSelectors } from 'src/app/store/slices/cart';
import { CartProductItemProps } from 'src/pages/cartScreen';
import styles from './cartList.module.scss';

export const CartList: FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<CartProductItemProps[]>([]);
  const [displayCount, setDisplayCount] = useState(5);
  const cartStore: CartProductItemProps[] = useSelector(cartSelectors.get);

  useEffect(() => {
    if (cartStore) {
      setProducts(cartStore.slice(0, displayCount));
    }
  }, [displayCount, cartStore]);

  const handleLoadMore = useCallback(() => {
    if (cartStore && displayCount < cartStore.length) {
      setDisplayCount((prev) => prev + 5);
    }
  }, [displayCount, cartStore]);

  return (
    <div className={styles.cart}>
      <Title className={`${styles.title}`}>{t('screens.CartScreen.list.title')}</Title>
      {((!products || products.length === 0) && (
        <span className={styles.cartListEmpty}>{t('screens.CartScreen.list.empty')}</span>
      )) || <CartListRender products={products} onLoadMore={handleLoadMore}></CartListRender>}
    </div>
  );
};
