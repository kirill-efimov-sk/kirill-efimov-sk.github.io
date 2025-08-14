import React, { FC } from 'react';
import { CardImageProps } from 'src/shared/card/card.types';
import styles from './productItem.module.scss';

export const ProductItemImageContainer: FC<CardImageProps> = ({ image }) => {
  if (!image) return <div>Нет изображения</div>;

  return (
    <div className={styles.image}>
      <img src={image.url} alt={image.title} />
    </div>
  );
};
