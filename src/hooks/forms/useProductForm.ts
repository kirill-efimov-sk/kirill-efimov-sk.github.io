import { useMemo, useState, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { ProductFormErrors, ProductFormValues } from 'src/features/forms/productForm/types';
import { regex } from '../../utils/regex';

export interface UseProductFormProps {
  initialProduct?: ProductFormValues;
}

export const useProductForm = (
  initialProduct: ProductFormValues
): Pick<FormikConfig<ProductFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & { loading: boolean } => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const initialValues = useMemo(
    () => ({
      name: initialProduct.name ?? '',
      description: initialProduct.description ?? '',
      category: initialProduct.category ?? '',
      price: initialProduct.price ?? null,
      image: initialProduct.image ?? { url: '', title: '' },
    }),
    [initialProduct]
  );

  const validate = useCallback(
    (values: ProductFormValues): Partial<ProductFormErrors> => {
      const errors: Partial<ProductFormErrors> = {};
      const symbols = '#&@/\\|{}[]';

      const fields: (keyof ProductFormValues)[] = ['description', 'name'];
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
    async (values: ProductFormValues) => {
      try {
        setLoading(true);
        console.log('Submitting product:', values);

        //Имитация API-запроса
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.success(t('screens.ProductScreen.edit.success'));
      } catch (error) {
        message.error(t('screens.ProductScreen.edit.error'));
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
