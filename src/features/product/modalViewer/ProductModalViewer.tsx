import React, { FC } from 'react';
import { ModalView } from 'src/shared/modal/view';
import { ProductScreenForm } from 'src/features/product/screen';

export const ProductModalViewer: FC = () => {
  return (
    <ModalView>
      <ProductScreenForm />
    </ModalView>
  );
};
