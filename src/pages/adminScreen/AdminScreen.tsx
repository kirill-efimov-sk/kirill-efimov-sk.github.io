import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProductScreenForm } from 'src/features/product/screen';
import { OperationScreenForm } from 'src/features/operation/screen';
import { Title } from 'src/shared/title';
import { DefaultButton } from 'src/shared/defaultButton';
import { Modal } from 'src/shared/modal/Modal';
import { useDataGenerator } from 'src/hooks/useDataGenerator';
import { Operation, Product } from 'src/utils/dataListGenerator';
import { operationsActions } from 'src/app/store/slices/operations';
import { productsActions } from 'src/app/store/slices/products';
import { useModal } from 'src/hooks/useModal';
import styles from './adminScreen.module.scss';

export const AdminScreen: FC = () => {
  const [modalContent, setModalContent] = useState<string>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { createProducts, createOperations } = useDataGenerator();
  const { isVisible: isModalVisible, open: handleOpenModal, close: handleCloseModal } = useModal();

  const handleOperationsGeneration = () => {
    const operations: Operation[] = createOperations(5);
    dispatch(operationsActions.add(operations));
    message.success(t('screens.AdminScreen.messages.createRandomItemsMessage'));
  };

  const handleProductsGeneration = () => {
    const products: Product[] = createProducts(5);
    dispatch(productsActions.add(products));
    message.success(t('screens.AdminScreen.messages.createRandomItemsMessage'));
  };

  return (
    <div className={styles.container}>
      <Title className={`${styles.title}`}>{t('screens.AdminScreen.title')}</Title>
      <div className={styles.operations}>
        <ol>
          <li>
            <DefaultButton
              onClick={() => handleOperationsGeneration()}
              title={t('screens.AdminScreen.buttons.generateOperations.title')}
            >
              {t('screens.AdminScreen.buttons.generateOperations.name')}
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              onClick={() => handleProductsGeneration()}
              title={t('screens.AdminScreen.buttons.generateProducts.title')}
            >
              {t('screens.AdminScreen.buttons.generateProducts.name')}
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              onClick={() => {
                setModalContent('operation');
                handleOpenModal();
              }}
              title={t('screens.AdminScreen.buttons.addNewOperationItem.title')}
            >
              {t('screens.AdminScreen.buttons.addNewOperationItem.name')}
            </DefaultButton>
          </li>
          <li>
            <DefaultButton
              onClick={() => {
                setModalContent('product');
                handleOpenModal();
              }}
              title={t('screens.AdminScreen.buttons.addNewProductItem.title')}
            >
              {t('screens.AdminScreen.buttons.addNewProductItem.name')}
            </DefaultButton>
          </li>
        </ol>
        <Modal visible={isModalVisible} onClose={handleCloseModal}>
          {modalContent == 'operation' && <OperationScreenForm closeModal={handleCloseModal} />}
          {modalContent == 'product' && <ProductScreenForm closeModal={handleCloseModal} />}
        </Modal>
      </div>
    </div>
  );
};
