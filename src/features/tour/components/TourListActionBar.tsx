import { ButtonCreate } from "@/components/button/ButtonCreate";
import { ButtonTrash } from "@/components/button/ButtonTrash";
import { Search } from "@/components/common/Search";
import { pathAdmin } from "@/config/path";

export const TourListActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập tên tour..." />
      <ButtonCreate to={`/${pathAdmin}/tour/create`} />
      <ButtonTrash to={`/${pathAdmin}/tour/trash`} />
    </div>
  );
};
