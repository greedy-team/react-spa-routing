import { useState, useEffect } from 'react';
import { Routes, Route,  useParams } from 'react-router-dom';
import NewsCard from './components/main/newsCard.jsx';
import axios from 'axios';
import HeaderNavigation from './components/Header/HeaderNavigation.jsx';

function App() {
  return (
    <>
      <header>
        <HeaderNavigation/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<NewsCardList />} />
          <Route path="/:category" element={<NewsCardList />} />
        </Routes>
      </main>

      <footer>푸터</footer>
    </>
  );
}

function NewsCardList() {
  const { category } = useParams();
  const [fetchedArticles, setFetchedArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;

        const url = category
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
          : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        const response = await axios.get(url);

        console.log('응답 데이터:', response.data);
        setFetchedArticles(response.data.articles);

      } catch (error) {
        console.error('에러 발생:', error);
      }

      setIsLoading(false);
    };

    fetchArticles();
  }, [category]);

  if (isLoading) {
    return <div>뉴스를 불러오는 중입니다...</div>;
  }

  if (!fetchedArticles) {
    return <div>뉴스가 없습니다.</div>;
  }

  return <NewsCard articles={fetchedArticles} />;
}

export default App;
