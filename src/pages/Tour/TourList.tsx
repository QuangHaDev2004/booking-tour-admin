import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { ActionBarTourList } from "./ActionBarTourList";
import { FilterBarTour } from "./FilterBarTour";
import { TourListTable } from "./TourListTable";

export const TourList = () => {
  return (
    <>
      <PageTitle title="Quản lý tour" />
      <FilterBarTour />
      <ActionBarTourList />
      <TourListTable />
      <Pagination />
    </>
  );
};
