import { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { ProductFormValues } from 'src/features/forms/productForm/types';
import { api } from 'src/app/store/rtq';
import { productsActions } from 'src/app/store/slices/products';
import { useFormValidation } from './useValidateForms';

export interface UseProductFormProps {
  initialProduct?: ProductFormValues;
}

export const useProductForm = ({
  initialProduct,
}: UseProductFormProps): Pick<FormikConfig<ProductFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & {
  loading: boolean;
} => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [addProduct, { isLoading: addProductLoading }] = api.products.useAddProductMutation();
  const [editProduct, { isLoading: editProductLoading }] = api.products.useEditProductMutation();
  const [uploadFile] = api.files.useUploadFileMutation();

  const loading = addProductLoading || editProductLoading;

  const initialValues = useMemo(
    () => ({
      id: initialProduct.id ?? '',
      name: initialProduct.name ?? '',
      description: initialProduct.description ?? '',
      categoryId: initialProduct.categoryId ?? '',
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
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('desc', values.description);
        formData.append('price', values.price.toString());
        formData.append('categoryId', values.categoryId);

        if (values.file instanceof File) {
          const uploadFileFormData = new FormData();
          uploadFileFormData.append('file', values.file);
          const result = await uploadFile(uploadFileFormData).unwrap();

          formData.append('photo', result.url);
        }

        if (values.id) {
          const result = await editProduct({ id: values.id, formData }).unwrap();
          dispatch(
            productsActions.update({
              id: result.id,
              name: result.name,
              photo: result?.photo,
              desc: result.desc,
              createdAt: result.createdAt,
              price: result.price,
              oldPrice: result.oldPrice,
              category: result.category,
            })
          );
        } else {
          await addProduct(formData).unwrap();
        }

        message.success(t('screens.ProductScreen.edit.success'));
      } catch (error) {
        message.error(t('errors.invalid_request'));
      }
    },
    [t, uploadFile, editProduct, dispatch, addProduct]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
