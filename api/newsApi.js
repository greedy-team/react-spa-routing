import axios from 'axios';

const newsApi = {
  fetchNews: async (category) => {

    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

    const url = category
      ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      
    const response = await axios.get(url);
    return response.data.articles;
  },
};

export default newsApi;
