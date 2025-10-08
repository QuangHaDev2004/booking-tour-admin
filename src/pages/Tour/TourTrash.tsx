import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { ActionBarTourTrash } from "./ActionBarTourTrash";
import { TourTrashTable } from "./TourTrashTable";

export const TourTrash = () => {
  return (
    <>
      <PageTitle title="Thùng rác tour" />
      <ActionBarTourTrash />
      <TourTrashTable />
      <Pagination />
    </>
  );
};
