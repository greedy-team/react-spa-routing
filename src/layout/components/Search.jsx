import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.svg";
import whiteSearchIcon from "../../assets/whiteSearchIcon.svg";
import { useEffect, useState } from "react";
import useDarkModeStore from "../../store/useDarkModeStore";

const Search = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const searchKeyword = searchParams.get("q") || "";
  const isDark = useDarkModeStore((state) => state.isDark);

  useEffect(() => {
    if (searchKeyword == "") {
      setInput("");
    }
  }, [searchKeyword]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(input);
    }
  };

  const handleSearch = () => {
    const basePath = category ? `/${category}` : "/";
    if (!input.trim()) {
      navigate(`${basePath}`);
      return;
    }
    navigate(`${basePath}?page=${currentPage}&q=${input}`);
  };

  return (
    <div className="w-[50%] flex items-center">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="궁금한 뉴스를 검색해보세요."
        className="w-[80%] h-full py-2 px-4 rounded-2xl border bg-slate-50 mr-2 dark:text-black"
      />
      <img
        src={isDark ? whiteSearchIcon : searchIcon}
        alt="검색 아이콘 이미지"
        onClick={handleSearch}
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
    </div>
  );
};

export default Search;
