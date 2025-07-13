import { useParams } from "react-router-dom";
import { useFetchNews } from "../../hooks/useFetchNews";
import ErrorMessage from "../common/ErrorMessage";
import LoadingMessage from "../common/LoadingMessage";
import News from "./News";

const NewsContainer = () => {
  const { category } = useParams();
  const { articles, loading, error } = useFetchNews(category);

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage message={`News Loading Error: ${error.message}`} />;
  }

  if (articles.length === 0) {
    return <ErrorMessage message="표시할 뉴스가 없습니다." />;
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
