import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card/';
import { truncatingText } from '../../../utils/variablesFormatting';
import { OperationFormValues } from '../../../features/forms/operationForm/types';
import { CardIdProps } from '../../../shared/card/card.types';

export interface OperationCardProps extends CardIdProps {
  operation: OperationFormValues;
}

export const OperationCard: FC<OperationCardProps> = React.memo(
  ({ operation }): React.JSX.Element => {
    const truncatedText = useMemo(() => truncatingText(operation.description, 100), [operation.description]);

    return (
      <Card.Container type={'inline'}>
        <Card.Content
          price={operation.price}
          category={operation.category}
          name={operation.name}
          description={truncatedText}
        />
      </Card.Container>
    );
  },
  (prev, next) => prev.cardId === next.cardId && prev.operation === next.operation
);

OperationCard.displayName = 'OperationCard';
