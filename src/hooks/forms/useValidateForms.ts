import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { regex } from '../../utils/regex';

interface ValidationConfig<T> {
  requiredFields: (keyof T)[];
  numberFields: (keyof T)[];
  minValues?: number;
}

export const useFormValidation = <T extends Record<string, unknown>>(config: ValidationConfig<T>) => {
  const { t } = useTranslation();
  return useCallback(
    (values: T): Partial<Record<keyof T, string>> => {
      const errors: Partial<Record<keyof T, string>> = {};
      const symbols = '#&@/\\|{}[]';

      // Валидация обязательных текстовых полей
      config.requiredFields.forEach((field) => {
        const value = values[field];
        const strValue = value?.toString();

        if (!strValue?.trim()) {
          errors[field] = t('errors.is_required');
        } else if (regex(symbols).test(strValue)) {
          errors[field] = t('errors.is_invalid');
        }
      });

      // Валидация числовых полей
      config.numberFields.forEach((field) => {
        const value = values[field];
        const minValue = config.minValues;

        if (value === null || value === undefined) {
          errors[field] = t('errors.is_required');
        } else if (Number(value) < minValue) {
          errors[field] = t('errors.min_value');
        }
      });

      return errors;
    },
    [t, config]
  );
};
