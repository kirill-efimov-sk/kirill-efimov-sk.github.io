import React, { FC } from 'react';
import { BaseCardProps, CardCategoryProps, BaseCardDateProps } from '../card.types';
import styles from './card.module.scss';

type CardContentProps = BaseCardProps & CardCategoryProps & BaseCardDateProps;

export const CardContent: FC<CardContentProps> = ({ price, name, description, category, date }) => {
  return (
    <div className={styles.content}>
      <div className={styles.name} title={name}>
        {name}
      </div>
      <div className={styles.description}>{description}</div>

      {category && <div className={styles.category}>Категория: {category}</div>}

      <div className={styles.priceContainer}>
        <div>Стоимость:</div>
        <div className={styles.price}>{price} ₽</div>
      </div>

      {date && <div className={styles.date}>{date}</div>}
    </div>
  );
};
