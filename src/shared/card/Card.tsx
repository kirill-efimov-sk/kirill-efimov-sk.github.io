import React, { FC } from 'react';
import styles from './card.module.scss';
import { BaseCardProps, CardCategoryProps, BaseCardDateProps, CardImageProps } from './card.types';

type CardProps = BaseCardProps & CardCategoryProps & BaseCardDateProps & CardImageProps;

export const Card: FC<CardProps> = ({ price, name, description, category, date, image, children }) => {
  return (
    <div className={`${styles.card} ${image ? styles.block : styles.inline}`}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image.url} alt={image.title} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>

        {category && <div className={styles.category}>Категория: {category}</div>}

        <div className={styles.priceContainer}>
          <div>Стоимость:</div>
          <div className={styles.price}>{price} ₽</div>
        </div>

        {date && <div className={styles.date}>{date}</div>}
      </div>

      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
};
