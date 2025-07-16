const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = import.meta.env.VITE_NEWS_API_URL;

if (!API_KEY || !API_URL) {
  throw new Error("API 키 또는 URL이 설정되지 않았습니다.");
}

export const fetchNewsByCategory = async (category) => {
  const queryParam =
    category && category.toLowerCase() !== "all" ? `&category=${category}` : "";
  const response = await fetch(
    `${API_URL}?country=us${queryParam}&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`HTTP 오류! 상태: ${response.status}`);
  }

  return response.json();
};
