import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

const newsApi = {
  fetchNews: async (category) => {
    const url = category
      ? `/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      : `/top-headlines?country=us&apiKey=${API_KEY}`;

    const response = await api.get(url);
    return response.data.articles;
  },
};

export default newsApi;
