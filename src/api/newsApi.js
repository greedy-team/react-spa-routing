const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_NEWS_URL = "https://newsapi.org/v2/top-headlines";

export async function fetchNewsByCategory(category) {
  if (!NEWS_API_KEY) {
    console.error(
      ".env 파일 내의 NEWS_API_KEY의 값이 잘못되었거나 설정되지 않았습니다.",
    );
    throw new Error(
      ".env 파일 내의 NEWS_API_KEY의 값이 잘못되었거나 설정되지 않았습니다.",
    );
  }

  const params = new URLSearchParams({
    country: "us",
    apiKey: NEWS_API_KEY,
  });

  if (category && category !== "all") {
    params.append("category", category);
  }

  const url = `${BASE_NEWS_URL}?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorBody = await response.json();
      console.error("NEWS_API 오류 응답:", errorBody);
      throw new Error(`뉴스 데이터를 가져오지 못했습니다.`);
    }
    return response.json();
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
}
