import { Select } from "@headlessui/react";
import {
  FaChevronDown,
  FaFilter,
  FaRotateLeft,
} from "react-icons/fa6";

export const FilterBar = () => {
  return (
    <div className="text-secondary mb-[15px] inline-flex flex-wrap items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
      <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4 lg:p-6">
        <FaFilter className="text-lg" />
        Bộ lọc
      </div>
      <div className="relative">
        <Select className="appearance-none border-r border-[#D5D5D5] p-4 lg:p-6 pr-12">
          <option value="">Trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Tạm dừng</option>
        </Select>
        <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
      </div>
      <div className="relative">
        <Select className="appearance-none border-r border-[#D5D5D5] p-4 lg:p-6 pr-12">
          <option value="">Người tạo</option>
          <option value="">Nguyễn Văn A</option>
          <option value="">Nguyễn Văn B</option>
        </Select>
        <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
      </div>
      <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4 lg:p-6">
        <input type="date" className="w-28" />
        <span>-</span>
        <input type="date" className="w-28" />
      </div>
      <button className="flex cursor-pointer items-center gap-3 p-4 lg:p-6 text-[#EA0234]">
        <FaRotateLeft className="text-lg" />
        Xóa bộ lọc
      </button>
    </div>
  );
};
