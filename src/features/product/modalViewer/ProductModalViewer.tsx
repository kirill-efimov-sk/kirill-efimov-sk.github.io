import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { ProductScreenForm } from 'src/features/product/screen';
import { useLocation } from 'react-router-dom';

export const ProductModalViewer: FC = () => {
  const location = useLocation();

  console.log(location.pathname);
  //Сделать запрос товара по ID из /products/ID

  return (
    <ModalView>
      <ProductScreenForm />
    </ModalView>
  );
};
