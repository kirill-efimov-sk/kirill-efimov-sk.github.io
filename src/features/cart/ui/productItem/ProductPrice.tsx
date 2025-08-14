import React, { FC } from 'react';

interface ProductPriceProps {
  children: React.ReactNode;
}

export const ProductPrice: FC<ProductPriceProps> = ({ children }) => {
  //тут можно добавить какие-то эффекты или стили
  return <strong>{children}</strong>;
};
