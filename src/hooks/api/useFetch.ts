import { useEffect, useState } from 'react';
import { fetchClient } from 'src/utils/fetch';

interface FetchConfig extends RequestInit {
  token?: string;
  skip?: boolean;
}
interface UseFetchResult<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
  refetch: () => void;
}

export const useFetch = <T>(url: string, config?: FetchConfig): UseFetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(0);

  const refetch = () => setTrigger((prev) => prev + 1);

  useEffect(() => {
    if (config?.skip || url.length === 0) return;

    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchClient<T>(url, {
          ...config,
          signal: abortController.signal,
        });
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, trigger, config]);

  return { loading, data, error, refetch };
};
