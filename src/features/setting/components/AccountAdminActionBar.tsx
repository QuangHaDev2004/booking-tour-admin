import { ButtonCreate } from "@/components/button/ButtonCreate";
import { Search } from "@/components/common/Search";
import { pathAdmin } from "@/config/path";

export const AccountAdminActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập email..." />
      <ButtonCreate to={`/${pathAdmin}/setting/account-admin/create`} />
    </div>
  );
};
