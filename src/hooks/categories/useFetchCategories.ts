import { useEffect, useState } from 'react';
import { api } from 'src/app/store/rtq';
import { CategoryPostData } from 'src/app/store/rtq/types';

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<CategoryPostData[] | null>(null);
  const [trigger, setTrigger] = useState(0);
  const [getCategories, { isLoading, error }] = api.categories.useLazyGetCategoriesQuery({});

  const refetch = () => setTrigger((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories({}).unwrap();
        setCategories(result.data);
      } catch (err) {
        console.error('Failed to fetch categories:', err);
      }
    };

    fetchData();
  }, [getCategories, trigger]);

  return { categories, isLoading, error, refetch };
};
