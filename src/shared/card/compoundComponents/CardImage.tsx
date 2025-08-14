import React, { FC } from 'react';
import { CardImageProps } from '../card.types';
import styles from './card.module.scss';

export const CardImage: FC<CardImageProps> = ({ image }) => {
  return (
    image && (
      <div className={styles.imageContainer}>
        <img src={image.url} alt={image.title} className={styles.image} />
      </div>
    )
  );
};
