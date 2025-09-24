import { useMemo, useState, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { OperationFormErrors, OperationFormValues } from 'src/features/forms/operationForm/types';
import { regex } from '../../utils/regex';

export interface OperationFormProps {
  initialOperation?: OperationFormValues;
}

export const useOperationForm = (
  initialOperation: OperationFormValues
): Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const initialValues = useMemo(
    () => ({
      name: initialOperation.name ?? '',
      description: initialOperation.description ?? '',
      category: initialOperation.category ?? '',
      price: initialOperation.price ?? null,
      date: initialOperation.date ?? '',
    }),
    [initialOperation]
  );

  const validate = useCallback(
    (values: OperationFormValues): Partial<OperationFormErrors> => {
      const errors: Partial<OperationFormErrors> = {};
      const symbols = '#&@/\\|{}[]';

      const fields: (keyof OperationFormValues)[] = ['description', 'name'];
      fields.forEach((field) => {
        const value = values[field];
        const strValue = value?.toString();

        if (!strValue?.trim()) {
          errors[field] = t('errors.is_required');
        } else if (regex(symbols).test(strValue)) {
          errors[field] = t('errors.is_invalid');
        }
      });

      if (values.price === null || values.price === undefined) {
        errors.price = t('errors.is_required');
      } else if (values.price < 1) {
        errors.price = t('errors.min_value', { min: 1 });
      }

      return errors;
    },
    [t]
  );

  const onSubmit = useCallback(
    async (values: OperationFormValues) => {
      try {
        setLoading(true);
        console.log('Submitting operation:', values);

        //Имитация API-запроса
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.success(t('screens.OperationScreen.edit.success'));
      } catch (error) {
        message.error(t('screens.OperationScreen.edit.error'));
      } finally {
        setLoading(false);
      }
    },
    [t]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
