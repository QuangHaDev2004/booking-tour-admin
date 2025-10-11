import { FaRotateLeft } from "react-icons/fa6";
import { useSearchParams } from "react-router";

export const FilterButtonReset = () => {
  const [, setSearchParams] = useSearchParams();

  const handleReset = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <button
      onClick={handleReset}
      className="text-error hover:bg-error/20 flex cursor-pointer items-center gap-3 p-4 transition-all duration-300"
    >
      <FaRotateLeft className="text-lg" />
      Xóa bộ lọc
    </button>
  );
};
