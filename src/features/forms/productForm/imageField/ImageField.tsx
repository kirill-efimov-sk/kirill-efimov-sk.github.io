import React, { memo, useCallback } from 'react';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { Upload, Button } from 'antd';
import type { UploadProps } from 'antd';
import { FormikHandlers } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../shared/formItem';
import { getValidates } from '../../../../utils/validation';
import { ProductFormProps, ProductFormFileSelect } from '../types';
import styles from './imageField.module.scss';

export type ImageUploadFieldProps = Pick<ProductFormProps, 'className' | 'disabled'> & {
  value?: string;
  filename?: string;
  disabled?: boolean;
  errors: string;
  touched: boolean;
  submitCount?: number;
  onFileSelect: ProductFormFileSelect;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const ImageField = memo<ImageUploadFieldProps>(
  ({ onFileSelect, onBlur, value, filename, disabled, errors, touched, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    // Определяем, что показывать: preview для загрузки или имя загруженного файла
    const displayFile = filename || value;

    const handleBeforeUpload = useCallback(
      (file: File) => {
        // Валидация размера файла
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
          console.error('The file is too large. Uploads must be no larger than 5MB.');
          return Upload.LIST_IGNORE;
        }

        // Сохраняем файл для последующей загрузки
        onFileSelect(file);

        // Предотвращаем автоматическую загрузку
        return false;
      },
      [onFileSelect, t]
    );

    const handleRemove = () => {
      onFileSelect(null);
      () => onBlur;
    };

    const uploadProps: UploadProps = {
      name: 'image',
      multiple: false,
      showUploadList: false,
      disabled: disabled,
      beforeUpload: handleBeforeUpload,
      accept: 'image/*',
    };

    return (
      <FormItem title={t('forms.ProductForm.image.title')} validateStatus={validateStatus} help={help}>
        <div className={styles.root}>
          {displayFile ? (
            <div className={styles.previewSection}>
              <div>{displayFile}</div>
              <Button
                icon={<DeleteOutlined />}
                onClick={handleRemove}
                disabled={disabled}
                danger
                className={styles.removeButton}
              >
                {t('forms.ProductForm.image.upload.remove')}
              </Button>
            </div>
          ) : (
            <Upload.Dragger {...uploadProps} className={styles.dragger}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">{t('forms.ProductForm.image.upload.text')}</p>
              <p className="ant-upload-hint">{t('forms.ProductForm.image.upload.hint')}</p>
            </Upload.Dragger>
          )}
        </div>
      </FormItem>
    );
  }
);

ImageField.displayName = 'ImageField';
