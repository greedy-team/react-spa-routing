import { create } from "zustand";
import { fetchNewsByCategory } from "../api/newsApi";

const useNewsStore = create((set) => ({
  articles: [],
  cachedArticles: {},
  loading: true,
  error: null,

  fetchNews: async (category) => {
    set((state) => {
      if (state.cachedArticles[category]) {
        return {
          articles: state.cachedArticles[category],
          loading: false,
          error: null,
        };
      }
      return { loading: true, error: null, articles: [] };
    });

    try {
      const data = await fetchNewsByCategory(category);
      set((state) => ({
        articles: data.articles,
        cachedArticles: {
          ...state.cachedArticles,
          [category]: data.articles,
        },
        loading: false,
        error: null,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useNewsStore;
