import React, { memo, useCallback } from 'react';
import cn from 'clsx';
import { CategoryFormProps } from './types';
import { NameField } from './nameField';
import { ImageField } from './imageField';
import styles from './categoryForm.module.scss';

export const CategoryForm = memo<CategoryFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, setFieldValue } = formManager;

    const handleFileSelect = useCallback(
      (file: File | null) => {
        setFieldValue('file', file);
      },
      [setFieldValue]
    );

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(styles.root, className)}>
        <NameField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
        <ImageField
          onFileSelect={handleFileSelect}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.file}
          filename={values.file?.name}
          disabled={disabled}
          errors={errors?.file?.name || ''}
          touched={!!touched.file}
          submitCount={submitCount}
        />
      </form>
    );
  }
);

CategoryForm.displayName = 'CategoryForm';
