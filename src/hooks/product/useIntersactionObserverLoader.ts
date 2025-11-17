import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { api } from 'src/app/store/rtq';
import { productsActions } from 'src/app/store/slices/products';

export const useIntersactionObserverLoader = (sectionSize = 10) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [total, setTotal] = useState<number | null>(null);
  const currentSectionRef = useRef(currentSection);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [getProducts, { isLoading, error }] = api.products.useLazyGetProductsQuery();

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    if (error) {
      message.error(t('errors.invalid_request'));
    }
  }, [error, t]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts({
          pagination: { pageSize: sectionSize, pageNumber: currentSection },
        }).unwrap();

        if (currentSection === 1) {
          // Первая загрузка - заменяем все данные
          dispatch(productsActions.set(result.data));
        } else {
          // Последующие загрузки - добавляем к существующим
          dispatch(productsActions.add(result.data));
        }

        setTotal(result.pagination.total);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchData();
  }, [currentSection, dispatch, getProducts, sectionSize]);

  const hasMoreItems = total === null || currentSection * sectionSize < total;

  const handleLoadMore = useCallback(() => {
    if (hasMoreItems && !isLoading) {
      setCurrentSection((prev) => prev + 1);
    }
  }, [hasMoreItems, isLoading]);

  const resetPagination = useCallback(() => {
    setCurrentSection(1);
    setTotal(null);
  }, []);

  return {
    handleLoadMore,
    resetPagination,
    currentSection,
    isLoading: isLoading,
    error,
    hasMoreItems,
  };
};
