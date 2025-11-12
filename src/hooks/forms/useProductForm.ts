import { useMemo, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { uid } from 'uid';
import { ProductFormValues } from 'src/features/forms/productForm/types';
import { productsActions } from 'src/app/store/slices/products';
import { Product } from 'src/utils/dataListGenerator';
import { useFormValidation } from './useValidateForms';

export interface UseProductFormProps {
  initialProduct?: ProductFormValues;
}

export const useProductForm = ({
  initialProduct,
}: UseProductFormProps): Pick<FormikConfig<ProductFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & {
  loading: boolean;
} => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = useMemo(
    () => ({
      id: initialProduct.id ?? '',
      name: initialProduct.name ?? '',
      description: initialProduct.description ?? '',
      category: initialProduct.category ?? '',
      price: initialProduct.price ?? 0,
      image: initialProduct.image ?? { url: '', title: '' },
      file: initialProduct.file ?? null,
    }),
    [initialProduct]
  );

  const validate = useFormValidation<ProductFormValues & { [key: string]: unknown }>({
    requiredFields: ['description', 'name'],
    numberFields: ['price'],
    minValues: 1,
  });

  const onSubmit = useCallback(
    async (values: ProductFormValues) => {
      try {
        setLoading(true);
        console.log('Submitting product:', values);

        const productData: Product = {
          id: values.id !== '' ? values.id : uid(18),
          name: values.name,
          foto: values.image.title,
          desc: values.description,
          createdAt: new Date().toLocaleDateString(),
          price: values.price,
          category: {
            id: uid(18),
            name: values.name,
            foto: '',
          },
        };

        if (values.id) {
          dispatch(productsActions.update(productData));
        } else {
          dispatch(productsActions.add([productData]));
        }

        //Имитация API-запроса
        console.log(values.file);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.success(t('screens.ProductScreen.edit.success'));
      } catch (error) {
        message.error(t('screens.ProductScreen.edit.error'));
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
