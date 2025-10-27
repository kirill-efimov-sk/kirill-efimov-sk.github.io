import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { OperationScreenForm } from 'src/features/operation/screen';
import { useLocation, useParams } from 'react-router-dom';

export const OperationModalViewer: FC = () => {
  const location = useLocation();
  const { id } = useParams();

  console.log('pathname: ' + location.pathname, 'useParams id: ' + id);
  //Сделать запрос товара по ID из /operations/ID

  return (
    <ModalView>
      <OperationScreenForm />
    </ModalView>
  );
};
