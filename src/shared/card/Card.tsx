import React, { FC } from 'react';
import { CardContainer } from './compoundComponents/CardContainer';
import { CardImage } from './compoundComponents/CardImage';
import { CardContent } from './compoundComponents/CardContent';
import { CardActions } from './compoundComponents/CardActions';
import { BaseCardProps, CardCategoryProps, BaseCardDateProps, CardImageProps } from './card.types';

type CardProps = BaseCardProps & CardCategoryProps & BaseCardDateProps & CardImageProps;

export const Card: FC<CardProps> & {
  Container: typeof CardContainer;
  Image: typeof CardImage;
  Content: typeof CardContent;
  Actions: typeof CardActions;
} = ({ price, name, description, category, date, image, children }) => {
  //Compound Components
  return (
    <CardContainer type={image ? 'block' : 'inline'}>
      <CardImage image={image} />
      <CardContent price={price} name={name} description={description} category={category} date={date} />
      <CardActions>{children}</CardActions>
    </CardContainer>
  );
};

Card.Container = CardContainer;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Actions = CardActions;
