import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { ProductScreenForm } from 'src/features/product/screen';
import { useLocation, useParams } from 'react-router-dom';

export const ProductModalViewer: FC = () => {
  const location = useLocation();
  const { id } = useParams();

  console.log('pathname: ' + location.pathname, 'useParams id: ' + id);
  //Сделать запрос товара по ID из /products/ID

  return (
    <ModalView>
      <ProductScreenForm />
    </ModalView>
  );
};
