import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: `https://newsapi.org/v2`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCategoryNews = async (category, currentPage, searchKeyword) => {
  const params = new URLSearchParams({
    country: 'us',
    pageSize: '15',
    page: currentPage,
    apiKey: apiKey,
    ...(searchKeyword && {q: searchKeyword}),
    ...(category && {category: category}),
  });

  const url = `/top-headlines?${params.toString()}`;

  const response = await instance.get(url);
  return response;
};
