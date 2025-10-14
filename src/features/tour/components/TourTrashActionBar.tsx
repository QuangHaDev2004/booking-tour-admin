import { ButtonCreate } from "@/components/button/ButtonCreate";
import { Search } from "@/components/common/Search";
import { pathAdmin } from "@/config/path";

export const TourTrashActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập tên tour..." />
      <ButtonCreate to={`/${pathAdmin}/tour/list`} text="Quay lại danh sách" />
    </div>
  );
};
