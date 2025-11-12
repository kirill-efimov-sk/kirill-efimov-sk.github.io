import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CounterInput } from '../../ui/counterInput';
import { DefaultButton } from 'src/shared/defaultButton';
import { Product } from 'src/utils/dataListGenerator';
import { useUpdateCart } from 'src/hooks/cart/useUpdateCart';

export interface AddToCartProps {
  count?: number;
  product: Product;
}

export const AddToCart: FC<AddToCartProps> = ({ count = 0, product }) => {
  const [counter, setCounter] = useState(count);
  const { t } = useTranslation();
  const { currentProductCount, updateCart } = useUpdateCart(product, counter);

  useEffect(() => {
    setCounter(currentProductCount);
  }, [currentProductCount]);

  if (counter > 0) {
    return <CounterInput value={counter} onChange={updateCart} />;
  }
  return (
    <DefaultButton onClick={() => updateCart(1)} title={t('screens.CartScreen.buttons.add.title')} disabled={false}>
      {t('screens.CartScreen.buttons.add.name')}
    </DefaultButton>
  );
};
