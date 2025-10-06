import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  return (
    <div className="inline-flex w-[366px] items-center gap-[15px] rounded-[14px] border border-[#D5D5D5] bg-white p-4 text-sm font-bold lg:p-6">
      <FaMagnifyingGlass className="text-[20px] text-[rgba(0,0,0,0.5)]" />
      <input type="text" placeholder="Tìm kiếm..." className="flex-1" />
    </div>
  );
};
