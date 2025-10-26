import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { OperationScreenForm } from 'src/features/operation/screen';
import { useLocation } from 'react-router-dom';

export const OperationModalViewer: FC = () => {
  const location = useLocation();

  console.log(location.pathname);
  //Сделать запрос товара по ID из /operations/ID

  return (
    <ModalView>
      <OperationScreenForm />
    </ModalView>
  );
};
