import { useState } from "react";
import useThemeStore from "../../store/useThemeStore";

const News = ({ article }) => {
  const [showImage, setShowImage] = useState(true);
  const theme = useThemeStore((state) => state.theme);

  if (article.content === null && article.description === null) {
    return (
      <div className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800 flex flex-col">
        <p className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          [Removed]
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">[Removed]</p>
      </div>
    );
  }

  const articleUrl = article.url || "#";

  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-col md:flex-row bg-white dark:bg-gray-800 text-black dark:text-white 
        rounded-xl overflow-hidden transition-shadow duration-400 ease-in-out 
        ${
          theme === "dark"
            ? "shadow-xs shadow-gray-600 hover:shadow-md"
            : "shadow-md hover:shadow-xl"
        }
        ${
          article.url ? "cursor-pointer" : "cursor-default"
        } // Change cursor based on URL availability
      `}
      onClick={(e) => {
        if (!article.url) {
          e.preventDefault();
        }
      }}
    >
      {article.urlToImage && showImage && (
        <div className="md:w-1/4">
          <img
            src={article.urlToImage}
            alt={article.title || "뉴스 이미지"}
            className="w-full h-48 md:h-full object-cover"
            onError={() => setShowImage(false)}
          />
        </div>
      )}
      <div className="p-4 md:w-3/4">
        <h2 className="text-2xl font-bold mb-2">
          {article.title || "제목이 제공되지 않았습니다."}
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mb-2 line-clamp-3">
          {article.description || "설명이 제공되지 않았습니다."}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          출처: {article.source.name || "출처가 명시되어 있지 않습니다."}
        </p>
      </div>
    </a>
  );
};

export default News;
