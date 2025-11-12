import React from 'react';
import { ProductItemBody } from './ProductItemBody';
import { ProductItemImageContainer } from './ProductItemImageContainer';
import { ProductItemContent } from './ProductItemContent';
import { ProductItemActions } from './ProductItemActions';
import { ProductPrice } from './ProductPrice';
import { BaseCardProps, CardIdProps, CardImageProps, CardQuantityProps } from 'src/shared/card/card.types';

export interface ProductItemProps
  extends Omit<BaseCardProps, 'description'>,
    CardImageProps,
    CardQuantityProps,
    CardIdProps {}

export const ProductItem: React.FC<ProductItemProps> = React.memo(
  ({ name, price, image, quantity, cardId }): React.JSX.Element => {
    return (
      <ProductItemBody>
        <ProductItemImageContainer image={image} />
        <ProductItemContent
          name={name}
          price={price}
          priceRender={(value) => {
            return <ProductPrice>{value.toFixed(2)} ₽</ProductPrice>;
          }}
          quantity={quantity}
        />
        <ProductItemActions name={name} cardId={cardId} />
      </ProductItemBody>
    );
  },
  (prev, next) => {
    return prev.cardId === next.cardId && prev.quantity === next.quantity;
  }
);

ProductItem.displayName = 'ProductItem';
