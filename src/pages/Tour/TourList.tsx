import { PageTitle } from "../../components/pageTitle/PageTitle"
import { Pagination } from "../../components/pagination/Pagination"
import { ActionBarTour } from "./ActionBarTour"
import { FilterBarTour } from "./FilterBarTour"
import { TourTable } from "./TourTable"


export const TourList = () => {
  return (
    <>
      <PageTitle title="Quản lý tour" />
      <FilterBarTour />
      <ActionBarTour />
      <TourTable />
      <Pagination />
    </>
  )
}