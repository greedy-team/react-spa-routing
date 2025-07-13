import { useState, useEffect } from "react";
import { fetchNewsByCategory } from "../api/news";

export const useFetchNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchNewsByCategory(category)
      .then((data) => setArticles(data.articles))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [category]);

  return { articles, loading, error };
};
