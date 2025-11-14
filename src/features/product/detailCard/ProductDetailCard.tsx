import React, { FC } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../../cart/buttons/addToCart';
import { CardIdProps } from '../../../shared/card/card.types';
import { Product } from '../../../utils/dataListGenerator';

export interface ProductDetailCardProps extends CardIdProps {
  product: Product;
}

export const ProductDetailCard: FC<ProductDetailCardProps> = React.memo(
  ({ product }): React.JSX.Element => {
    return (
      <Card.Container type={'block'}>
        <Card.Image
          image={{
            url: product.foto,
            title: 'Изображение товара',
          }}
        />
        <Card.Content
          price={product.price}
          category={product.category.name}
          name={product.name}
          description={product.desc}
        />
        <Card.Actions>
          <AddToCart count={0} product={product} />
        </Card.Actions>
      </Card.Container>
    );
  },
  (prev, next) => prev.cardId === next.cardId
);

ProductDetailCard.displayName = 'ProductDetailCard';
