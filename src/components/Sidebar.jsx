import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import styles from "@/styles/components/Sidebar.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

export const categories = [
  "home",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const isDay = useRecoilValue(isDayState);

  return (
    <aside className={`${styles.sidebar} ${!isDay ? styles.nightSidebar : ""}`}>
      <ul className={styles.categoryList}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`${styles.categoryItem} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => {
              setSelectedCategory(cat);
            }}
          >
            <Link to={`/${cat}`} className={styles.link}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
