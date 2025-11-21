import { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router";

export const Search = ({ placeholder }: { placeholder: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParam = searchParams.get("keyword") || "";
  const [keyword, setKeyword] = useState(keywordParam);

  useEffect(() => {
    setKeyword(keywordParam);
  }, [keywordParam]);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(searchParams);
    if (event.code === "Enter") {
      if (keyword.trim()) {
        newParams.set("keyword", keyword);
      } else {
        newParams.delete("keyword");
      }
    }
    setSearchParams(newParams);
  };

  const handleClear = () => {
    setKeyword("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("keyword");
    setSearchParams(newParams);
  };

  return (
    <div className="border-travel-four inline-flex w-[366px] items-center gap-4 rounded-lg border bg-white p-4 text-sm font-bold">
      <IoSearch className="text-travel-secondary/60 text-[20px]" />
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
        placeholder={placeholder}
        className="flex-1"
      />
      {keyword && (
        <FaRegCircleXmark
          onClick={handleClear}
          className="text-travel-secondary/60 cursor-pointer text-lg"
        />
      )}
    </div>
  );
};
