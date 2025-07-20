import React, { FC } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../../cart/buttons/addToCart';
import { BaseCardProps, CardCategoryProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductDetailCardProps extends BaseCardProps, Required<CardCategoryProps>, Required<CardImageProps> {}

export const ProductDetailCard: FC<ProductDetailCardProps> = ({
  price,
  image,
  category,
  name,
  description,
}): React.JSX.Element => {
  return (
    <Card price={price} image={image} category={category} name={name} description={description}>
      <AddToCart count={0} />
    </Card>
  );
};
