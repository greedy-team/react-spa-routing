import { useParams } from "react-router-dom";
import { useFetchNews } from "../../hooks/useFetchNews";
import News from "./News";

const NewsContainer = () => {
  const { category } = useParams();
  const { articles, loading, error } = useFetchNews(category);

  if (loading) {
    return (
      <div className="p-12 text-center">
        <p className="text-4xl font-bold dark:text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500 dark:text-red-400">
        <p>News Loading Error: {error.message}</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        <p>표시할 뉴스가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid gap-6">
      {articles.map((article) => (
        <News key={article.url || Math.random()} article={article} />
      ))}
    </div>
  );
};

export default NewsContainer;
