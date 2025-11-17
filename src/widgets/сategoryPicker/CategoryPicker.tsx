import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'src/shared/title';
import { CategoryEditor } from './CategoryEditor';
import { useFetchCategories } from 'src/hooks/categories/useFetchCategories';
import styles from './categoryPicker.module.scss';

export const CategoryPicker: FC = () => {
  const { t } = useTranslation();
  const { categories, isLoading, error, refetch } = useFetchCategories();

  return (
    <div className={styles.categories}>
      <Title className={`${styles.title}`}>{t('screens.AdminScreen.categories.title')}</Title>
      <CategoryEditor categories={categories} isLoading={isLoading} error={error} refetch={refetch}></CategoryEditor>
    </div>
  );
};
