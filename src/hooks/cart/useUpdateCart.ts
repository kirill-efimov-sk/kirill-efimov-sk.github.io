import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors, CartState } from 'src/app/store/slices/cart';
import { Product } from 'src/utils/dataListGenerator';
import { CartProductItemProps } from 'src/pages/cartScreen';

export interface UseUpdateCartReturn {
  currentProductCount: number;
  updateCart: (newCount: number) => void;
}

export const useUpdateCart = (product: Product, externalCount?: number): UseUpdateCartReturn => {
  const dispatch = useDispatch();
  const cart: CartState = useSelector(cartSelectors.get);

  // Вычисляем текущее количество товара в корзине
  const currentProductCount = useMemo(() => {
    const currentProduct = (cart || []).find((p) => p.id === product.id);
    return currentProduct?.quantity || 0;
  }, [cart, product.id]);

  // Функция обновления корзины
  const updateCart = useCallback(
    (newCount: number) => {
      const editedProduct: CartProductItemProps = { ...product, quantity: newCount };
      editedProduct.price = product.price * newCount;

      if (newCount === 1 && externalCount < newCount) {
        dispatch(cartActions.add([editedProduct]));
      } else if (newCount == 0) {
        dispatch(cartActions.delete(editedProduct));
      } else {
        dispatch(cartActions.update(editedProduct));
      }
    },
    [product, externalCount, dispatch]
  );

  return {
    currentProductCount,
    updateCart,
  };
};
