import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../forms';
import { Title } from '../../../shared/title';
import { useCategoryForm } from '../../../hooks/forms/useCategoryForm';
import { CategoryFormValues } from 'src/features/forms/categoryForm/types';
import styles from './categoryScreenForm.module.scss';

const initCategory: CategoryFormValues = {
  id: '',
  name: '',
};

export interface CategoryFormProps {
  initialCategory?: CategoryFormValues;
  closeModal?: () => void;
}

export const CategoryScreenForm: React.FC<CategoryFormProps> = ({ initialCategory = initCategory, closeModal }) => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validate, loading } = useCategoryForm({ initialCategory });

  const formManager = useFormik<CategoryFormValues>({
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
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.CategoryScreen.edit.title')}</Title>
      <UserForms.CategoryForm formManager={formManager} />
      <Button type="primary" onClick={submitForm} loading={loading || isSubmitting}>
        {t('screens.CategoryScreen.edit.save')}
      </Button>
    </div>
  );
};
