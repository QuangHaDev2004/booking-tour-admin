import { Search } from "@/components/common/Search";
import { FaSliders } from "react-icons/fa6";

export const CategoryActionBar = () => {
  return (
    <>
      <div className="text-travel-secondary mb-2 flex items-center gap-3 text-lg font-semibold italic">
        <FaSliders className="size-5" /> Đổi trạng thái và tìm kiếm
      </div>
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="border-travel-secondary/20 text-travel-secondary flex h-10 items-center overflow-hidden rounded-4xl border bg-white text-sm font-semibold">
          <select className="select h-full w-[160px] border-none px-4">
            <option value="">Chọn hành động</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Tạm dừng</option>
            <option value="delete">Xóa</option>
          </select>
          <button className="text-travel-red border-travel-secondary/20 h-full cursor-pointer border-l px-4">
            Áp dụng
          </button>
        </div>
        <Search placeholder="Nhập tên danh mục..." />
      </div>
    </>
  );
};
