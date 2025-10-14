import { ButtonCreate } from "@/components/button/ButtonCreate";
import { pathAdmin } from "@/config/path";
import { Search } from "@/components/common/Search";

export const RoleActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập tên nhóm quyền..." />
      <ButtonCreate to={`/${pathAdmin}/setting/role/create`} />
    </div>
  );
};
