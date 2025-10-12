import { PageTitle } from "@/components/pageTitle/PageTitle";
import { CategoryFilterBar } from "./components/CategoryFilterBar";
import { CategoryActionBar } from "./components/CategoryActionBar";
import { CategoryTable } from "./components/CategoryTable";
import { Pagination } from "@/components/pagination/Pagination";

export const CategoryList = () => {
  return (
    <>
      <PageTitle title="Quản lý danh mục" />
      <CategoryFilterBar />
      <CategoryActionBar />
      <CategoryTable />
      <Pagination />
    </>
  );
};
