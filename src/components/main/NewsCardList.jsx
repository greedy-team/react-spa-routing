import { useParams } from 'react-router-dom';
import useNews from '../../hooks/useNews';
import NewsCard from './NewsCard';

function NewsCardList() {
  const { category } = useParams();
  const { data: articles, error, refetch } = useNews(category);

  if (articles) {
    return <NewsCard articles={articles} />;
  }

  if (error) {
    return (
      <>
        <div>에러가 발생했습니다 다시한번 시도해 주세요</div>
        <div>
          <button style={{ width: 'auto' }} onClick={() => refetch()}>
            재시도
          </button>
        </div>
      </>
    );

  }

  return <div>로딩 중... ⏳</div>;
}
export default NewsCardList;
