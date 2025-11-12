import React, { FC, useMemo } from 'react';
import { Card } from '../../../shared/card';
import { AddToCart } from '../../cart/buttons/addToCart';
import { truncatingText } from '../../../utils/variablesFormatting';
import { ProductScreenForm } from '../screen';
import { Modal } from '../../../shared/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { CardIdProps } from '../../../shared/card/card.types';
import { Product } from '../../../utils/dataListGenerator';
import { EditModalButton } from '../../../features/product/buttons/edit';
import { ProxyAdminRights } from '../../../app/proxy/accessRights';

export interface ProductCardProps extends CardIdProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = React.memo(
  ({ product }): React.JSX.Element => {
    const { isVisible: isModalVisible, open: openOperationEditModal, close: handleCloseModal } = useModal();
    const truncatedText = useMemo(() => truncatingText(product.desc, 100), [product.desc]);
    const image = {
      url: product.foto,
      title: 'Изображение товара',
    };

    return (
      <>
        <Card.Container type={'block'}>
          <Card.Image image={image} />
          <Card.Content price={product.price} name={product.name} description={truncatedText} />
          <Card.Actions>
            <AddToCart count={0} product={product} />
            <ProxyAdminRights>
              <EditModalButton onOpen={openOperationEditModal} />
            </ProxyAdminRights>
          </Card.Actions>
        </Card.Container>

        <Modal visible={isModalVisible} onClose={handleCloseModal}>
          <ProductScreenForm
            initialProduct={{
              id: product.id,
              category: product.category.name,
              description: product.desc,
              name: product.name,
              price: product.price,
              image,
            }}
            closeModal={handleCloseModal}
          />
        </Modal>
      </>
    );
  },
  (prev, next) => {
    return prev.cardId === next.cardId && prev.product === next.product;
  }
);

ProductCard.displayName = 'ProductCard';
