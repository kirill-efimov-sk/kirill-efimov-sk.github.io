import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../forms';
import { Title } from '../../../shared/title';
import { OperationFormValues } from '../../forms/operationForm/types';
import { useOperationForm } from '../../../hooks/forms/useOperationForm';
import styles from './operationScreenForm.module.scss';

const initOperation = {
  id: '',
  category: '',
  date: '',
  description: '',
  name: '',
  price: 0,
};

export interface OperationFormProps {
  initialOperation?: OperationFormValues;
  closeModal?: () => void;
}

export const OperationScreenForm: React.FC<OperationFormProps> = ({ initialOperation = initOperation, closeModal }) => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validate, loading } = useOperationForm(initialOperation);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit: async (values, helpers) => {
      try {
        // Вызываем оригинальный onSubmit
        await onSubmit(values, helpers);
      } catch (error) {
        console.error('Form submission error:', error);
        helpers.setSubmitting(false);

        return;
      }

      if (closeModal) closeModal();
    },
    validate,
    enableReinitialize: true,
  });
  const { submitForm, isSubmitting } = formManager;

  return (
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.OperationScreen.edit.title')}</Title>
      <UserForms.OperationForm formManager={formManager} />
      <Button type="primary" onClick={submitForm} loading={loading || isSubmitting}>
        {t('screens.OperationScreen.edit.save')}
      </Button>
    </div>
  );
};
