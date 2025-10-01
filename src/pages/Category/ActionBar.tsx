import { FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";
import { Select } from "@headlessui/react";
import { Link } from "react-router";
import { pathAdmin } from "../../constants/path";

export const ActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <div className="text-secondary inline-flex items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
        <div className="relative">
          <Select
            name=""
            className="appearance-none border-r border-[#D5D5D5] p-4 pr-12 lg:p-6"
          >
            <option value="">-- Hành động --</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Tạm dừng</option>
            <option value="delete">Xóa</option>
          </Select>
          <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
        </div>
        <button className="cursor-pointer p-4 font-semibold text-[#EA0234] lg:p-6">
          Áp dụng
        </button>
      </div>

      <div className="inline-flex w-[366px] items-center gap-[15px] rounded-[14px] border border-[#D5D5D5] bg-white p-4 text-sm font-bold text-[#979797] lg:p-6">
        <FaMagnifyingGlass className="text-[20px] text-[rgba(0,0,0,0.5)]" />
        <input type="text" placeholder="Tìm kiếm..." className="flex-1" />
      </div>

      <Link
        to={`/${pathAdmin}/category/create`}
        className="bg-primary inline-block rounded-[14px] px-8 py-4 text-sm font-bold text-white lg:px-11 lg:py-[25px]"
      >
        + Tạo mới
      </Link>
    </div>
  );
};
