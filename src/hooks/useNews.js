import { useQuery } from '@tanstack/react-query';
import newsApi from '../api/newsApi';

const useNews = (category) => useQuery({
  queryKey: ['news', category],
  queryFn: () => newsApi.fetchNews(category),
});
export default useNews;
