import { useMemo, useCallback } from 'react';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { api } from 'src/app/store/rtq';
import { CategoryFormValues } from 'src/features/forms/categoryForm/types';
import { useFormValidation } from './useValidateForms';

export interface CategoryFormProps {
  initialCategory?: CategoryFormValues;
}

export const useCategoryForm = ({
  initialCategory,
}: CategoryFormProps): Pick<FormikConfig<CategoryFormValues>, 'onSubmit' | 'validate' | 'initialValues'> & {
  loading: boolean;
} => {
  const { t } = useTranslation();

  const [addCategory, { isLoading: addCategoryLoading }] = api.categories.useAddCategoryMutation();
  const [editCategory, { isLoading: editCategoryLoading }] = api.categories.useEditCategoryMutation();
  const [uploadFile] = api.files.useUploadFileMutation();

  const loading = addCategoryLoading || editCategoryLoading;

  const initialValues = useMemo(
    () => ({
      id: initialCategory.id ?? '',
      name: initialCategory.name ?? '',
      file: initialCategory.file ?? null,
    }),
    [initialCategory]
  );

  const validate = useFormValidation<CategoryFormValues & { [key: string]: unknown }>({
    requiredFields: ['name'],
    numberFields: [],
    minValues: 1,
  });

  const onSubmit = useCallback(
    async (values: CategoryFormValues) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);

        if (values.file instanceof File) {
          const uploadFileFormData = new FormData();
          uploadFileFormData.append('file', values.file);
          const result = await uploadFile(uploadFileFormData).unwrap();

          formData.append('photo', result.url);
        }

        if (values.id) {
          await editCategory({ id: values.id, formData }).unwrap();
        } else {
          await addCategory(formData).unwrap();
        }

        message.success(t('screens.CategoryScreen.edit.success'));
      } catch (error) {
        message.error(t('errors.invalid_request'));
      }
    },
    [addCategory, editCategory, t, uploadFile]
  );

  return {
    initialValues,
    onSubmit,
    validate,
    loading,
  };
};
