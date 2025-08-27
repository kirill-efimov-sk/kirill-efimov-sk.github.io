import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card/';
import { truncatingText } from '../../../utils/variablesFormatting';
import { BaseCardProps, CardIdProps, CardCategoryProps } from 'src/shared/card/card.types';

export interface OperationCardProps extends BaseCardProps, CardIdProps, Required<CardCategoryProps> {}

export const OperationCard: FC<OperationCardProps> = React.memo(
  ({ price, category, name, description }): React.JSX.Element => {
    const truncatedText = useMemo(() => truncatingText(description, 100), [description]);

    return (
      <Card.Container type={'inline'}>
        <Card.Content price={price} category={category} name={name} description={truncatedText} />
      </Card.Container>
    );
  },
  (prev, next) => prev.cardId === next.cardId
);

OperationCard.displayName = 'OperationCard';
