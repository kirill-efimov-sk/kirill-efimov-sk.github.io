import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card/';
import { truncatingText } from '../../../utils/variablesFormatting';
import { BaseCardProps, CardCategoryProps } from 'src/shared/card/card.types';

export interface OperationCardProps extends BaseCardProps, Required<CardCategoryProps> {}

export const OperationCard: FC<OperationCardProps> = ({ price, category, name, description }): React.JSX.Element => {
  const truncatedText = useMemo(() => truncatingText(description, 100), [description]);

  return <Card price={price} category={category} name={name} description={truncatedText} />;
};
