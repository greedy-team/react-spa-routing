import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import newsApi from '../../api/newsApi';
import NewsCard from './newsCard';

function NewsCardList() {
  const { category } = useParams();
  const fetchedNews = useFetch(() => newsApi.fetchNews(category), [category]);

  if (fetchedNews.isLoading) {
    return <div>로딩 중... ⏳</div>;
  }

  if (fetchedNews.error) {
    return (
      <>
        <div>에러가 발생했습니다 다시한번 시도해 주세요</div>
        <div>
          <button style={{ width: 'auto' }} onClick={fetchedNews.refetch}>
            재시도
          </button>
        </div>
      </>
    );
  }

  if (fetchedNews.data) {
    return <NewsCard articles={fetchedNews.data} />;
  }

  return <div>데이터가 없습니다.</div>;
}

export default NewsCardList;
