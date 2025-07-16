import styles from "@/styles/components/NewsList.module.scss";
import { useEffect, useState } from "react";
import { fetchTopNews } from "@/api/api.js";
import { useRecoilValue } from "recoil";
import { isDayState, selectedCategoryState } from "@/store/rootAtoms";
import IntroMessage from "@/components/IntroMessage";
import fallbackImg from "@/assets/fallbackImg.jpeg";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const category = useRecoilValue(selectedCategoryState);
  const isDay = useRecoilValue(isDayState);

  useEffect(() => {
    fetchTopNews(category).then(setNews);
  }, [category]);

  const filteredNews = news.filter(
    (news) =>
      news.title &&
      news.description &&
      news.urlToImage &&
      news.url &&
      news.source.name
  );

  return (
    <>
      <div className={`${styles.newsList} ${!isDay ? styles.nightList : ""}`}>
        <IntroMessage />
        {filteredNews.map((news) => (
          <a
            className={styles.newsCard}
            key={news.url}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.newsThumbnail}
              src={news.urlToImage}
              alt="썸네일"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImg;
              }}
            />
            <div className={styles.newsContent}>
              <div className={styles.newsTitle}>{news.title}</div>
              <div className={styles.newsDescription}>{news.description}</div>
              <div className={styles.newsSource}>{news.source.name}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default NewsList;
