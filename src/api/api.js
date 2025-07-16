import {
  NEWS_API_TOP_HEADLINES,
  NEWS_API_BASEURL,
  NEWS_API_KEY,
} from "@/constanats";
import { toast } from "sonner";

export const fetchTopNews = async (category) => {
  const url =
    category === "home"
      ? `${NEWS_API_BASEURL}/everything?q=latest&pageSize=20&apiKey=${NEWS_API_KEY}`
      : `${NEWS_API_TOP_HEADLINES}?country=us&pageSize=20&category=${category}&apiKey=${NEWS_API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("HTTP 요청에 실패했습니다.");
    }
    const data = await res.json();

    if (data.status === "error") {
      throw new Error(data.message || "API 요청 중 오류가 발생했습니다.");
    }
    return data.articles;
  } catch (err) {
    console.log(err.message);
    toast.error(err.message, { id: "error" });
    throw err;
  }
};
