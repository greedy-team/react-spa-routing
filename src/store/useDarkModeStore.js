import { create } from "zustand";

const applyTheme = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

const useDarkModeStore = create((set) => ({
  isDark: localStorage.getItem("theme") === "dark",
  toggleDark: () =>
    set((state) => {
      const newTheme = !state.isDark;
      applyTheme(newTheme);
      return { isDark: newTheme };
    }),
  setDark: (value) =>
    set(() => {
      applyTheme(value);
      return { isDark: value };
    }),
}));

export default useDarkModeStore;