import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryScreenForm } from 'src/features/categories/screen';
import { Modal } from 'src/shared/modal/Modal';
import { useModal } from 'src/hooks/useModal';
import { DefaultButton } from 'src/shared/defaultButton';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import styles from './categoryPicker.module.scss';

interface Category {
  id: string;
  name: string;
}
interface CategoryEditorRenderProps {
  categories: Category[];
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
  refetch?: () => void;
}

export const CategoryEditor: FC<CategoryEditorRenderProps> = ({ categories, isLoading, error, refetch }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { isVisible: isModalVisible, open: openEditModal, close: closeEditModal } = useModal();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Фильтрация категорий с проверкой на null/undefined
  const filteredCategories =
    categories?.filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSearchTerm(`${category.name} (${category.id})`);
    setIsDropdownOpen(false);
  };

  const handleEditClick = () => {
    if (selectedCategory) {
      openEditModal();
    }
  };

  const handleCloseModal = () => {
    closeEditModal();
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 150);
  };

  // Функция для рендеринга контента выпадающего списка
  const renderDropdownContent = () => {
    if (isLoading) {
      return (
        <div className={styles.dropdownItem}>
          <span className={styles.loadingText}>{t('screens.AdminScreen.categories.list.loading')}</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className={styles.dropdownItem}>
          <span className={styles.errorText}>{t('screens.AdminScreen.categories.list.error')}</span>
        </div>
      );
    }

    if (filteredCategories.length === 0) {
      return (
        <div className={styles.dropdownItem}>
          <span className={styles.emptyText}>{t('screens.AdminScreen.categories.list.empty')}</span>
        </div>
      );
    }

    return filteredCategories.map((category) => (
      <div key={category.id} className={styles.dropdownItem} onClick={() => handleSelectCategory(category)}>
        <span className={styles.categoryName}>{category.name}</span>
        <span className={styles.categoryId}>ID: {category.id}</span>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.container} ref={dropdownRef}>
        <div className={styles.item}>
          <DefaultButton
            className={styles.editButton}
            onClick={refetch}
            disabled={isLoading}
            title={t('screens.AdminScreen.categories.buttons.refresh')}
          >
            {isLoading ? '⏳' : '↺'}
          </DefaultButton>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder={t('screens.AdminScreen.categories.selectCategory')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={handleInputBlur}
              className={styles.input}
            />

            {isDropdownOpen && <div className={styles.dropdown}>{renderDropdownContent()}</div>}
          </div>

          <DefaultButton
            className={styles.editButton}
            onClick={handleEditClick}
            disabled={!selectedCategory}
            title={t('screens.AdminScreen.categories.buttons.edit')}
          >
            {t('screens.AdminScreen.categories.buttons.edit')}
          </DefaultButton>
        </div>
      </div>

      <Modal visible={isModalVisible} onClose={handleCloseModal}>
        {selectedCategory && <CategoryScreenForm initialCategory={selectedCategory} closeModal={handleCloseModal} />}
      </Modal>
    </>
  );
};
