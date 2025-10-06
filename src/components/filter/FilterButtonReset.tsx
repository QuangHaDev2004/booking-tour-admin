import { FaRotateLeft } from "react-icons/fa6";

export const FilterButtonReset = () => {
  return (
    <button className="flex cursor-pointer items-center gap-3 p-4 text-[#EA0234] lg:p-6">
      <FaRotateLeft className="text-lg" />
      Xóa bộ lọc
    </button>
  );
};
