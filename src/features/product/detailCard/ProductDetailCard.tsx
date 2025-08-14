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
    <Card.Container type={'block'}>
      <Card.Image image={image} />
      <Card.Content price={price} category={category} name={name} description={description} />
      <Card.Actions>
        <AddToCart count={0} />
      </Card.Actions>
    </Card.Container>
  );
};
