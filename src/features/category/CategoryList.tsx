import { PageTitle } from "@/components/pageTitle/PageTitle";
import { CategoryFilterBar } from "./components/CategoryFilterBar";
// import { CategoryActionBar } from "./components/CategoryActionBar";
import { CategoryTable } from "./components/CategoryTable";
import { Pagination } from "@/components/pagination/Pagination";
import { ButtonCreate } from "@/components/button/ButtonCreate";
import { pathAdmin } from "@/config/path";

export const CategoryList = () => {
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Quản lý danh mục" />
        <ButtonCreate to={`/${pathAdmin}/category/create`} />
      </div>
      <CategoryFilterBar />
      {/* <CategoryActionBar /> */}
      <CategoryTable />
      <Pagination />
    </>
  );
};
