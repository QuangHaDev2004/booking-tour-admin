import { PageTitle } from "@/components/pageTitle/PageTitle";
import { TourTrashActionBar } from "./components/TourTrashActionBar";
import { TourTrashTable } from "./components/TourTrashTable";
import { Pagination } from "@/components/pagination/Pagination";


export const TourTrash = () => {
  return (
    <>
      <PageTitle title="Thùng rác tour" />
      <TourTrashActionBar />
      <TourTrashTable />
      <Pagination />
    </>
  );
};
