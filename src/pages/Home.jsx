import Navbar from "@/components/Navbar";
import NewsList from "@/components/NewsList";
import Sidebar from "@/components/Sidebar";
import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "@/styles/pages/Home.module.scss";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { categories } from "@/components/Sidebar.jsx";

function Home() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const isDay = useRecoilValue(isDayState);

  if (category && !categories.includes(category)) {
    return <Navigate to="/not-found" replace />;
  }

  useEffect(() => {
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
    if (!category && selectedCategory !== "home") {
      setSelectedCategory("home");
    }
  }, [category]);

  return (
    <>
      <Navbar />
      <main className={`${styles.base} ${!isDay ? styles.night : ""}`}>
        <Sidebar />
        <NewsList />
      </main>
    </>
  );
}

export default Home;
