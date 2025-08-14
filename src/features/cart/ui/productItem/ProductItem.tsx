import React from 'react';
import styles from './productItem.module.scss';
import { BaseCardProps, CardImageProps } from 'src/shared/card/card.types';

export interface ProductItemProps extends Omit<BaseCardProps, 'description'>, CardImageProps {
  quantity: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ name, price, image, quantity }) => {
  return (
    <div className={styles.item}>
      {image && (
        <div className={styles.image}>
          <img src={image.url} alt={name} />
        </div>
      )}

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price.toFixed(2)} ₽</p>
        <p className={styles.quantity}>Количество: {quantity}</p>
      </div>

      <button className={styles.removeButton} aria-label={`Удалить ${name} из корзины`}>
        ×
      </button>
    </div>
  );
};
