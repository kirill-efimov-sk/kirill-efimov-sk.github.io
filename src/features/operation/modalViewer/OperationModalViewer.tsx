import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { OperationScreenForm } from 'src/features/operation/screen';

export const OperationModalViewer: FC = () => {
  return (
    <ModalView>
      <OperationScreenForm />
    </ModalView>
  );
};
