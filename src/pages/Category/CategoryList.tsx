import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { FilterBarCategory } from "./FilterBarCategory";
import { CategoryTable } from "./CategoryTable";
import { ActionBarCategory } from "./ActionBarCategory";

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
