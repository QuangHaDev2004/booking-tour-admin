import { Search } from "@/components/actionBar/Search";
import { ButtonCreate } from "@/components/button/ButtonCreate";
import { pathAdmin } from "@/config/path";

export const ActionBarCategory = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search />
      <ButtonCreate to={`/${pathAdmin}/category/create`} />
    </div>
  );
};
