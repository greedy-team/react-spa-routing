import { atom, selector } from "recoil";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "home",
});

export const isDayState = atom({
  key: "idDayState",
  default: JSON.parse(localStorage.getItem("isDay")) ?? true,
});
