import React, { memo } from 'react';
import cn from 'clsx';
import { ProductFormProps } from './types';
import { NameField } from './nameField';
import { DescriptionField } from './descriptionField';
import { CategoryField } from './categoryField';
import { PriceField } from './priceField/PriceField';
import { ImageField } from './imageField';
import styles from './productForm.module.scss';

interface ExtendedOperationFormProps extends ProductFormProps {
  selectedFile?: File | null;
}

export const ProductForm = memo<ExtendedOperationFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled, onFileSelect, selectedFile }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(styles.root, className)}>
        <NameField
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
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          errors={errors.category}
          submitCount={submitCount}
          touched={touched.category}
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
          onFileSelect={onFileSelect}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.image.url}
          disabled={disabled}
          errors={errors.image?.title}
          touched={touched.image?.title}
          submitCount={submitCount}
          filename={selectedFile?.name}
        />
      </form>
    );
  }
);

ProductForm.displayName = 'ProductForm';
