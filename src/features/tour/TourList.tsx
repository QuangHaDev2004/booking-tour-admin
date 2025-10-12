import { PageTitle } from "@/components/pageTitle/PageTitle";
import { TourListFilterBar } from "./components/TourListFilterBar";
import { TourListActionBar } from "./components/TourListActionBar";
import { TourListTable } from "./components/TourListTable";
import { Pagination } from "@/components/pagination/Pagination";


export const TourList = () => {
  return (
    <>
      <PageTitle title="Quản lý tour" />
      <TourListFilterBar />
      <TourListActionBar />
      <TourListTable />
      <Pagination />
    </>
  );
};
