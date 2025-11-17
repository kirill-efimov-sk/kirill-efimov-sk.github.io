// OperationScreenForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../forms';
import { Title } from '../../../shared/title';
import { ProductFormValues } from '../../forms/productForm/types';
import { useProductForm } from '../../../hooks/forms/useProductForm';
import styles from './productScreenForm.module.scss';

const initialItem = {
  id: '',
  categoryId: '',
  description: '',
  name: '',
  price: 0,
  image: { url: '', title: '' },
};

export interface ProductFormProps {
  initialProduct?: ProductFormValues;
  closeModal?: () => void;
}

export const ProductScreenForm: React.FC<ProductFormProps> = ({ initialProduct = initialItem, closeModal }) => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validate, loading } = useProductForm({ initialProduct });

  const formManager = useFormik<ProductFormValues>({
    initialValues,
    onSubmit: async (values, helpers) => {
      try {
        // Вызываем оригинальный onSubmit
        await onSubmit(values, helpers);

        if (closeModal) closeModal();
      } catch (error) {
        console.error('Form submission error:', error);
        return;
      }
    },
    validate,
    enableReinitialize: true,
  });

  const { submitForm, isSubmitting } = formManager;

  return (
    <div className={styles.container}>
      <Title className={styles.title}>{t('screens.ProductScreen.edit.title')}</Title>
      <UserForms.ProductForm formManager={formManager} />
      <Button type="primary" onClick={submitForm} loading={loading || isSubmitting}>
        {t('screens.ProductScreen.edit.save')}
      </Button>
    </div>
  );
};
