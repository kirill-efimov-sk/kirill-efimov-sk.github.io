import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../../cart/buttons/addToCart';
import { truncatingText } from '../../../utils/variablesFormatting';
import { BaseCardProps, CardIdProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductCardProps extends BaseCardProps, CardIdProps, Required<CardImageProps> {}

export const ProductCard: FC<ProductCardProps> = React.memo(
  ({ price, image, name, description }): React.JSX.Element => {
    const truncatedText = useMemo(() => truncatingText(description, 100), [description]);

    return (
      <Card.Container type={'block'}>
        <Card.Image image={image} />
        <Card.Content price={price} name={name} description={truncatedText} />
        <Card.Actions>
          <AddToCart count={0} />
        </Card.Actions>
      </Card.Container>
    );
  },
  (prev, next) => prev.cardId === next.cardId
);
