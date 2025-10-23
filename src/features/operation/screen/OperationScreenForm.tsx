import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UserForms } from '../../forms';
import { Title } from '../../../shared/title';
import { OperationFormValues } from '../../forms/operationForm/types';
import { useOperationForm } from '../../../hooks/forms/useOperationForm';
import styles from './operationScreenForm.module.scss';

const initOperation = {
  category: 'test',
  date: '2025-01-01',
  description: 'test',
  name: 'test',
  price: 100,
};

export interface OperationFormProps {
  initialOperation?: OperationFormValues;
}

export const OperationScreenForm: React.FC<OperationFormProps> = ({ initialOperation = initOperation }) => {
  const { t } = useTranslation();

  const { initialValues, onSubmit, validate, loading } = useOperationForm(initialOperation);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({
      name: initialOperation.name,
      description: initialOperation.description,
      category: initialOperation.category,
      price: initialOperation.price,
      date: initialOperation.date,
    });
  }, [initialOperation, setValues]);

  return (
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.OperationScreen.edit.title')}</Title>
      <UserForms.OperationForm formManager={formManager} />
      <Button type="primary" onClick={submitForm} style={{ marginTop: '16px' }} loading={loading}>
        {t('screens.OperationScreen.edit.save')}
      </Button>
    </div>
  );
};
