// OperationScreenForm.tsx
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../forms';
import { Title } from '../../../shared/Title';
import { ProductFormValues } from '../../forms/productForm/types';
import { useProductForm } from '../../../hooks/forms/useProductForm';
import styles from './productScreenForm.module.scss';

const initOperation = {
  category: 'test',
  description: 'test',
  name: 'test',
  price: 1000,
  image: { url: '', title: '' },
};

export interface ProductFormProps {
  initialOperation?: ProductFormValues;
}

export const ProductScreenForm: React.FC<ProductFormProps> = ({ initialOperation = initOperation }) => {
  const { t } = useTranslation();

  const { initialValues, onSubmit, validate, loading } = useProductForm(initialOperation);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const formManager = useFormik<ProductFormValues>({
    initialValues,
    onSubmit: async (values, helpers) => {
      try {
        if (selectedFile) {
          values.image.title = selectedFile.name;
          console.log(selectedFile);
        }

        // Вызываем оригинальный onSubmit
        await onSubmit(values, helpers);
      } catch (error) {
        helpers.setSubmitting(false);
      }
    },
    validate,
  });

  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({
      name: initialOperation.name,
      description: initialOperation.description,
      category: initialOperation.category,
      price: initialOperation.price,
      image: initialOperation.image,
    });
  }, [initialOperation, setValues]);

  return (
    <div className={styles.container}>
      <Title className={styles.title}>{t('screens.ProductScreen.edit.title')}</Title>
      <UserForms.ProductForm formManager={formManager} onFileSelect={setSelectedFile} selectedFile={selectedFile} />
      <Button type="primary" onClick={submitForm} style={{ marginTop: '16px' }} loading={loading}>
        {t('screens.ProductScreen.edit.save')}
      </Button>
    </div>
  );
};
