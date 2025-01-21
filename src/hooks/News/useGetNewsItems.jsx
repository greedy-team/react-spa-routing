import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useGetNewsItems = () => {
  const { category } = useParams();
  const apiKey = import.meta.env.VITE_MY_API_KEY;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const getUrl =
      category === 'all'
        ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    const getNewsItems = async () => {
      setLoading(true);
      setNewsItems([]);
      try {
        const response = await axios.get(getUrl);

        if (response) {
          setNewsItems(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getNewsItems();
  }, [category, apiKey]);

  return { newsItems, loading, error };
};

export default useGetNewsItems;
