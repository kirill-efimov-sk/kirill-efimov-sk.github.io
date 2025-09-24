import React, { memo } from 'react';
import cn from 'clsx';
import { OperationFormProps } from './types';
import { NameField } from './nameField';
import { DescriptionField } from './descriptionField';
import { CategoryField } from './categoryField';
import { PriceField } from './priceField/PriceField';
import { DateField } from './dateField';
import styles from './operationForm.module.scss';

export const OperationForm = memo<OperationFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
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
        <DateField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.date}
          errors={errors.date}
          submitCount={submitCount}
          touched={touched.date}
          disabled={disabled}
        />
      </form>
    );
  }
);

OperationForm.displayName = 'OperationForm';
