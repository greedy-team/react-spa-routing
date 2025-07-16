import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useNewsStore from "../stores/newsStore";
import {
  PageContainer,
  HeaderTitle,
  ErrorMessage,
  LoadingMessage,
  NoResultsMessage,
} from "./NewsListPage.styled";
import NewsCard from "../components/mains/NewsCard";

function NewsListPage() {
  const { category: urlCategory } = useParams();
  const { articles, loading, error, fetchNews } = useNewsStore();
  const navigate = useNavigate();

  const VALID_CATEGORIES = [
    "general",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const category = urlCategory || "general";

  useEffect(() => {
    if (urlCategory && !VALID_CATEGORIES.includes(urlCategory)) {
      navigate("/not-found", { replace: true });
      return;
    }

    fetchNews(category);
  }, [category, fetchNews]);

  const displayCategoryName =
    category === "general"
      ? "All"
      : category.charAt(0).toUpperCase() + category.slice(1);

  if (loading)
    return (
      <LoadingMessage>"{displayCategoryName}" 뉴스 로딩 중...</LoadingMessage>
    );

  if (error) return <ErrorMessage> 에러 발생: {error}</ErrorMessage>;

  if (!articles || articles.length === 0)
    return (
      <NoResultsMessage>
        "{displayCategoryName}" 카테고리의 뉴스를 찾을 수 없습니다.
      </NoResultsMessage>
    );

  return (
    <PageContainer>
      <HeaderTitle> {displayCategoryName} News</HeaderTitle>
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </PageContainer>
  );
}

export default NewsListPage;
