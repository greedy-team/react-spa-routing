import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchCategoryNews } from "../apis/api";
import NewsItem from "./NewsItem";
import Pagination from "../util/Pagination";

const ITEM_PER_PAGE = 15;

const NewsList = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const searchKeyword = searchParams.get('q') || '';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['news', category, currentPage, searchKeyword],
    queryFn: () => fetchCategoryNews(category || null, currentPage, searchKeyword),
  });

  if (isLoading) {
    return null;
  }
  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  const newsList = data.data.articles || [];
  const page = Math.ceil((data.data.totalResults || 0) / ITEM_PER_PAGE);

  return (
    <div className="px-10 py-5 w-full flex flex-col">
      {newsList.map((news, idx) => (
        <a
          key={`${news.publishedAt}-${idx}`}
          href={news.url}
          className="border w-full flex h-60 gap-4 px-4 py-2 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors rounded-lg"
        >
          <NewsItem news={news} />
        </a>
      ))}
      <Pagination page={page} />
    </div>
  );
};

export default NewsList;
