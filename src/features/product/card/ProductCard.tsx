import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../../cart/buttons/addToCart';
import { truncatingText } from '../../../utils/variablesFormatting';
import { BaseCardProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductCardProps extends BaseCardProps, Required<CardImageProps> {}

export const ProductCard: FC<ProductCardProps> = ({ price, image, name, description }): React.JSX.Element => {
  const truncatedText = useMemo(() => truncatingText(description, 100), [description]);

  return (
    <Card price={price} image={image} name={name} description={truncatedText}>
      <AddToCart count={0} />
    </Card>
  );
};
