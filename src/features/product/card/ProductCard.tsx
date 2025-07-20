import React, { FC } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../cart/buttons/addToCard';
import { BaseCardProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductCardProps extends BaseCardProps, Required<CardImageProps> {}

export const ProductCard: FC<ProductCardProps> = ({ price, image, name, description }): React.JSX.Element => {
  const truncatedText = description.length > 100 ? description.substring(0, 100) + '<...>' : description;
  return (
    <Card price={price} image={image} name={name} description={truncatedText}>
      <AddToCart count={0} />
    </Card>
  );
};
