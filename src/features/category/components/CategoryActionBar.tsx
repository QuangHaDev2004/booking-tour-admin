import { Search } from "@/components/common/Search";
import { ButtonCreate } from "@/components/button/ButtonCreate";
import { pathAdmin } from "@/config/path";

export const CategoryActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập tên danh mục..." />
      <ButtonCreate to={`/${pathAdmin}/category/create`} />
    </div>
  );
};
