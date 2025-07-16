import { useNavigate, useParams } from "react-router-dom";

const NEWS_CATEGORIES = [
  "all",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Category = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className="w-[50%] flex items-center gap-1 mr-4 overflow-x-auto scrollbar-hide">
      {NEWS_CATEGORIES.map((newsCategory) => (
        <div
          key={newsCategory}
          className={`px-2 py-1 cursor-pointer border-b-4 border-transparent hover:border-b-black dark:hover:border-b-white hover:text-black dark:text-white transition-colors  ${
            newsCategory === (category || "all")
              ? "border-b-4 border-b-black dark:border-b-white font-semibold"
              : ""
          }`}
          onClick={() =>
            navigate(newsCategory === "all" ? "/" : `/${newsCategory}`)
          }
        >
          {newsCategory}
        </div>
      ))}
    </div>
  );
};

export default Category;
