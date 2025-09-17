import {
  FaChevronDown,
  FaFilter,
  FaMagnifyingGlass,
  FaRotateLeft,
} from "react-icons/fa6";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Select } from "@headlessui/react";
import { Link } from "react-router";

export const CategoryList = () => {
  return (
    <>
      <PageTitle title="Quản lý danh mục" />

      <div className="text-secondary mb-[15px] inline-flex items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
        <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-6">
          <FaFilter className="text-lg" />
          Bộ lọc
        </div>
        <div className="relative">
          <Select className="appearance-none border-r border-[#D5D5D5] p-6 pr-12">
            <option value="">Trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Tạm dừng</option>
          </Select>
          <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
        </div>
        <div className="relative">
          <Select className="appearance-none border-r border-[#D5D5D5] p-6 pr-12">
            <option value="">Người tạo</option>
            <option value="">Nguyễn Văn A</option>
            <option value="">Nguyễn Văn B</option>
          </Select>
          <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
        </div>
        <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-6">
          <input type="date" className="w-28" />
          <span>-</span>
          <input type="date" className="w-28" />
        </div>
        <button className="flex cursor-pointer items-center gap-3 p-6 text-[#EA0234]">
          <FaRotateLeft className="text-lg" />
          Xóa bộ lọc
        </button>
      </div>

      <div className="mb-[30px] flex flex-wrap items-center gap-4">
        <div className="text-secondary inline-flex items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
          <div className="relative">
            <Select
              name=""
              className="appearance-none border-r border-[#D5D5D5] p-6 pr-12"
            >
              <option value="">-- Hành động --</option>
              <option value="active">Hoạt động</option>
              <option value="inactive">Tạm dừng</option>
              <option value="delete">Xóa</option>
            </Select>
            <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[12px]" />
          </div>
          <button className="cursor-pointer p-6 font-semibold text-[#EA0234]">
            Áp dụng
          </button>
        </div>

        <div className="inline-flex w-[366px] items-center gap-[15px] rounded-[14px] border border-[#D5D5D5] bg-white p-6 text-sm font-bold text-[#979797]">
          <FaMagnifyingGlass className="text-[20px] text-[rgba(0,0,0,0.5)]" />
          <input type="text" placeholder="Tìm kiếm..." className="flex-1" />
        </div>

        <Link
          to="/admin/category/create"
          className="bg-primary inline-block rounded-[14px] px-11 py-[25px] text-sm font-bold text-white"
        >
          + Tạo mới
        </Link>
      </div>
    </>
  );
};
