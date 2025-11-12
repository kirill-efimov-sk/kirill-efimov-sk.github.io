import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card';
import { formatingDate } from '../../../utils/variablesFormatting';
import { EditModalButton } from '../buttons/edit';
import { OperationScreenForm } from '../screen';
import { Modal } from '../../../shared/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { ProxyAdminRights } from '../../../app/proxy/accessRights';
import { OperationFormValues } from '../../../features/forms/operationForm/types';
import { CardIdProps } from '../../../shared/card/card.types';

export interface OperationDetailCardProps extends CardIdProps {
  operation: OperationFormValues;
}

export const OperationDetailCard: FC<OperationDetailCardProps> = React.memo(
  ({ operation }): React.JSX.Element => {
    const { isVisible: isModalVisible, open: openOperationEditModal, close: handleCloseModal } = useModal();
    const formattedDate = useMemo(() => formatingDate(operation.date, 'DD.MM.YYYY'), [operation.date]);
    const initialDate = useMemo(() => formatingDate(operation.date, 'YYYY-MM-DD'), [operation.date]);

    return (
      <>
        <Card.Container type={'inline'}>
          <Card.Content
            price={operation.price}
            category={operation.category}
            name={operation.name}
            description={operation.description}
            date={formattedDate}
          />
          <Card.Actions>
            <ProxyAdminRights>
              <EditModalButton onOpen={openOperationEditModal} />
            </ProxyAdminRights>
          </Card.Actions>
        </Card.Container>

        <Modal visible={isModalVisible} onClose={handleCloseModal}>
          <OperationScreenForm
            initialOperation={{
              id: operation.id,
              category: operation.category,
              date: initialDate,
              description: operation.description,
              name: operation.name,
              price: operation.price,
            }}
            closeModal={handleCloseModal}
          />
        </Modal>
      </>
    );
  },
  (prev, next) => prev.cardId === next.cardId && prev.operation === next.operation
);

OperationDetailCard.displayName = 'OperationDetailCard';
