import React, { memo, useCallback } from 'react';
import cn from 'clsx';
import { ProductFormProps } from './types';
import { NameField } from './nameField';
import { DescriptionField } from './descriptionField';
import { CategoryField } from './categoryField';
import { PriceField } from './priceField/PriceField';
import { ImageField } from './imageField';
import styles from './productForm.module.scss';

export const ProductForm = memo<ProductFormProps>(
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
        <DescriptionField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.description}
          errors={errors.description}
          submitCount={submitCount}
          touched={touched.description}
          disabled={disabled}
        />
        <CategoryField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.categoryId}
          errors={errors.categoryId}
          submitCount={submitCount}
          touched={touched.categoryId}
          disabled={disabled}
        />
        <PriceField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.price}
          errors={errors.price}
          submitCount={submitCount}
          touched={touched.price}
          disabled={disabled}
        />
        <ImageField
          onFileSelect={handleFileSelect}
          onBlur={() => handleBlur('file')}
          onChange={handleChange}
          value={values.file}
          disabled={disabled}
          errors={errors?.file?.name || ''}
          touched={!!touched.file}
          submitCount={submitCount}
        />
      </form>
    );
  }
);

ProductForm.displayName = 'ProductForm';
