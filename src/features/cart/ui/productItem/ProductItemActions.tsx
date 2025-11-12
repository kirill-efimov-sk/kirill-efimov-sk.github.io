import React, { FC } from 'react';
import { CardIdProps, CardNameProps } from 'src/shared/card/card.types';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors } from 'src/app/store/slices/cart';
import { CartProductItemProps } from 'src/pages/cartScreen';
import styles from './productItem.module.scss';

interface ProductItemActionsProps extends CardNameProps, CardIdProps {}

export const ProductItemActions: FC<ProductItemActionsProps> = ({ name, cardId }) => {
  const dispatch = useDispatch();
  const productsStore: CartProductItemProps[] = useSelector(cartSelectors.get);

  const handleRemoveItem = () => {
    const newProductCopies = productsStore.filter((product) => product.id !== cardId);

    dispatch(cartActions.set(newProductCopies));
  };

  return (
    <button className={styles.removeButton} onClick={handleRemoveItem} aria-label={`Удалить ${name} из корзины`}>
      ×
    </button>
  );
};
