import React, { FC } from 'react';
import { Card } from '../../../shared/card';
import { Button } from '../../../shared/defaultButton';
import { formatingDate } from '../../../utils/variablesFormatting';
import { BaseCardProps, CardCategoryProps, CardDateProps } from 'src/shared/card/card.types';

export interface OperationDetailCardProps extends BaseCardProps, Required<CardCategoryProps>, Required<CardDateProps> {}

export const OperationDetailCard: FC<OperationDetailCardProps> = ({
  price,
  category,
  name,
  description,
  date,
}): React.JSX.Element => {
  const formattedDate = formatingDate(new Date(date));

  return (
    <Card price={price} category={category} name={name} description={description} date={formattedDate}>
      <Button title="Редактирование операции" disabled>
        Редактировать
      </Button>
    </Card>
  );
};
