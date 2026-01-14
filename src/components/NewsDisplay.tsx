import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { getNewsData } from "../api/getNewsData";
import NEWS_CATEGORIES, { ValidCategory } from "@/constants/newsCategory";

interface Article {
  title: string;
  urlToImage: string;
  description: string;
  url: string;
}

interface ArticlesResponse {
  articles: Article[];
}

function isValidCategory(path: string): path is ValidCategory {
  const validCategories = NEWS_CATEGORIES.map((c) => c.href);
  return validCategories.includes(path as ValidCategory);
}

export default function NewsDisplay() {
  const { category } = useParams<{ category: string }>();
  const categoryPath = category ? `/${category}` : "/";

  if (!isValidCategory(categoryPath)) {
    return <div>404 Not Found :</div>;
  }

  const categoryToFetch = category || "general";

  const { data, isLoading, isError } = useQuery<ArticlesResponse>({
    queryKey: ["news", categoryToFetch],
    queryFn: () => getNewsData(categoryToFetch),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading news.</div>;
  }

  return (
    <div className="grid gap-4">
      {data && data.articles ? (
        data.articles.map((item) => (
          <NewsCard
            key={item.url}
            title={item.title}
            imageUrl={item.urlToImage}
            description={item.description}
            link={item.url}
          />
        ))
      ) : (
        <div>No articles available</div>
      )}
    </div>
  );
}
