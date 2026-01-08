import { useState, useEffect } from 'react';
import Card from './main/newsCard.jsx';
import axios from 'axios';

function App() {
  const [fetchdedArticles, setFetchdedArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const searchKeyword = 'test';

        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchKeyword}&apiKey=${apiKey}`,
        );

        console.log('전체 응답 데이터:', response.data);
        setFetchdedArticles(response.data.articles);

      } catch (error) {
        console.error('에러 발생:', error);
      }
      setIsLoading(false);
    };

    fetchedData();
  }, []);

  if (isLoading) {
    return <div>뉴스를 불러오는 중입니다...</div>;
  }

  if (!fetchdedArticles) {
    return <div>뉴스가 없습니다.</div>;
  }

  return (
    <>
      <header></header>

      <main>
        <Card articles={fetchdedArticles} />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
