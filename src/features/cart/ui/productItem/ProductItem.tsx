import React from 'react';
import { ProductItemBody } from './ProductItemBody';
import { ProductItemImageContainer } from './ProductItemImageContainer';
import { ProductItemContent } from './ProductItemContent';
import { ProductItemActions } from './ProductItemActions';
import { ProductPrice } from './ProductPrice';
import { BaseCardProps, CardImageProps, CardQuantityProps } from 'src/shared/card/card.types';

export interface ProductItemProps extends Omit<BaseCardProps, 'description'>, CardImageProps, CardQuantityProps {}

export const ProductItem: React.FC<ProductItemProps> = ({ name, price, image, quantity }) => {
  return (
    <ProductItemBody>
      <ProductItemImageContainer image={image} />
      <ProductItemContent
        name={name}
        price={price}
        priceRender={(value) => {
          //render props as children
          return <ProductPrice>{value.toFixed(2)} ₽</ProductPrice>;
        }}
        quantity={quantity}
      />
      <ProductItemActions name={name} />
    </ProductItemBody>
  );
};
