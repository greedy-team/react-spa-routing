import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Pagination = ({ page }) => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const searchKeyword = searchParams.get("q") || '';

  const handlePage = (controlNum) => {
    const basePath = category ? `/${category}` : "/";
    if (controlNum < 0 && currentPage !== 1) {
      navigate(`${basePath}?page=${currentPage - 1}&q=${searchKeyword}`);
    } else if (controlNum > 0 && currentPage < page) {
      navigate(`${basePath}?page=${currentPage + 1}&q=${searchKeyword}`);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <span
        className={`cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100 font-extrabold hover:bg-gray-200 dark:text-black ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePage(-1)}
      >
        {"<"}
      </span>
      {Array.from({ length: page }, (_, index) => {
        const basePath = category ? `/${category}` : "/";
        return (
          <span
            key={index + 1}
            onClick={() => navigate(`${basePath}?page=${index + 1}`)}
            className={`flex items-center cursor-pointer mx-3 ${
              currentPage === index + 1 ? "font-extrabold" : ""
            }`}
          >
            {index + 1}
          </span>
        );
      })}
      <button
        className={`cursor-pointer px-2 py-1 mx-1 rounded-lg bg-gray-100 font-extrabold hover:bg-gray-200 dark:text-black ${
          currentPage === page ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePage(1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
