import { useState } from "react";
import noImg from "../assets/no-img.svg";
import whiteNoImg from "../assets/white_no_img.svg";
import useDarkModeStore from "../store/useDarkModeStore";

const NewsItem = ({ news }) => {
  const [imgError, setImgError] = useState(false);
  const isDark = useDarkModeStore((state) => state.isDark);

  return (
    <>
      <div className="w-[25%] h-[100%] rounded-lg">
        <img
          src={
            !imgError && news.urlToImage
              ? news.urlToImage
              : isDark
                ? whiteNoImg
                : noImg
          }
          alt={news.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="min-h-[30%] h-fit p-1 border-b text-xl font-bold hover:underline line-clamp-2">
          {news.title}
        </h2>
        <p className="p-1 line-clamp-6">{news.content}</p>
      </div>
    </>
  );
};

export default NewsItem;
