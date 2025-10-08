import { Select } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";

export const Pagination = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="text-secondary/60 text-sm font-semibold">
        Hiển thị 1 - 9 của 78
      </div>
      <div className="relative">
        <Select
          name=""
          className="appearance-none rounded-lg border border-[#D5D5D5] py-1.5 pr-12 pl-[14px] text-secondary/60 font-semibold"
        >
          <option value="">Trang 1</option>
          <option value="">Trang 2</option>
          <option value="">Trang 3</option>
        </Select>
        <FaChevronDown className="text-secondary/60 pointer-events-none absolute top-1/2 right-[14px] -translate-y-1/2 text-[12px]" />
      </div>
    </div>
  );
};
