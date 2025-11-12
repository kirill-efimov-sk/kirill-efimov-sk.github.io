import { useMemo, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { uid } from 'uid';
import { OperationFormValues } from 'src/features/forms/operationForm/types';
import { operationsActions } from 'src/app/store/slices/operations';
import { Operation } from 'src/utils/dataListGenerator';
import { useFormValidation } from './useValidateForms';

export interface OperationFormProps {
  initialOperation?: OperationFormValues;
}

export const useOperationForm = (
  initialOperation: OperationFormValues
): Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const initialValues = useMemo(
    () => ({
      id: initialOperation.id ?? '',
      name: initialOperation.name ?? '',
      description: initialOperation.description ?? '',
      category: initialOperation.category ?? '',
      price: initialOperation.price ?? 0,
      date: initialOperation.date ?? '',
    }),
    [initialOperation]
  );

  const validate = useFormValidation<OperationFormValues & { [key: string]: unknown }>({
    requiredFields: ['description', 'name', 'date'],
    numberFields: ['price'],
    minValues: 1,
  });

  const onSubmit = useCallback(
    async (values: OperationFormValues) => {
      try {
        setLoading(true);
        console.log('Submitting operation:', values);

        const operationData: Operation = {
          id: values.id !== '' ? values.id : uid(18),
          name: values.name,
          desc: values.description,
          createdAt: values.date,
          amount: values.price,
          category: {
            id: uid(18),
            name: values.category,
            foto: '',
          },
          type: values.id !== '' ? 'Cost' : 'Profit',
        };

        if (values.id) {
          dispatch(operationsActions.update(operationData));
        } else {
          dispatch(operationsActions.add([operationData]));
        }

        //Имитация API-запроса
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.success(t('screens.OperationScreen.edit.success'));
      } catch (error) {
        message.error(t('screens.OperationScreen.edit.error'));
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [dispatch, t]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
