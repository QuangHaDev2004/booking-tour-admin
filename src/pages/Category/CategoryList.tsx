import { PageTitle } from "../../components/pageTitle/PageTitle";
import { SecondaryTable } from "../../components/table/SecondaryTable";
import { Pagination } from "../../components/pagination/Pagination";
import { FilterBar } from "./FilterBar";
import { ActionBar } from "./ActionBar";

export const CategoryList = () => {
  return (
    <>
      <PageTitle title="Quản lý danh mục" />
      <FilterBar />
      <ActionBar />
      <div className="srcoll-table mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border border-[#D5D5D5] bg-white">
        <SecondaryTable />
      </div>
      <Pagination />
    </>
  );
};
