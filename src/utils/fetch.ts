interface FetchClientConfig extends RequestInit {
  token?: string;
}

export const fetchClient = async <T>(url: string, config?: FetchClientConfig): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(config?.token && { Authorization: `Bearer ${config.token}` }),
    ...config?.headers,
  };

  const response = await fetch(url, {
    ...config,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
};
