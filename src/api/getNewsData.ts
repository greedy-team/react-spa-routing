import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

export async function getNewsData(category: string) {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: "us",
        apiKey: NEWS_API_KEY,
        category,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}
