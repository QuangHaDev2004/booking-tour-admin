import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FilterBarCategory } from "./components/FilterBarCategory";
import { ActionBarCategory } from "./components/ActionBarCategory";
import { CategoryTable } from "./components/CategoryTable";
import { Pagination } from "@/components/pagination/Pagination";

export const CategoryList = () => {
  return (
    <>
      <PageTitle title="Quản lý danh mục" />
      <FilterBarCategory />
      <ActionBarCategory />
      <CategoryTable />
      <Pagination />
    </>
  );
};
