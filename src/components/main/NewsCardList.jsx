import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsApi from '../../api/newsApi';
import NewsCard from './newsCard';

function NewsCardList() {
  const { category } = useParams();
  const [articles, setArticles] = useState(null);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await newsApi.fetchNews(category);
      setArticles(data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, [category]);

  if (articles) {
    return <NewsCard articles={articles} />;
  }

  if (error) {
    return (
      <>
        <div>에러가 발생했습니다 다시한번 시도해 주세요</div>
        <div>
          <button style={{ width: 'auto' }} onClick={fetchArticles}>
            재시도
          </button>
        </div>
      </>
    );
  }
  if (isLoding) {
    return <div>로딩 중... ⏳</div>;
  }
}

export default NewsCardList;
