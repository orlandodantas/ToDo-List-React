import useSWR from 'swr';
import api from '../services/api';

const useFetcher = (url) => {
  const { data, error, mutate } = useSWR(url, async (urlAPI) => {
    const response = await api.get(urlAPI);

    return response.data;
  });

  return {
    isLoading: !data && !error,
    data,
    error,
    mutate,
  };
};

export default useFetcher;
