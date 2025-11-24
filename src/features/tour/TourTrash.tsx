import { PageTitle } from "@/components/pageTitle/PageTitle";
// import { TourTrashActionBar } from "./components/TourTrashActionBar";
import { TourTrashTable } from "./components/TourTrashTable";
import { pathAdmin } from "@/config/path";
import { ContextLink } from "@/components/common/ContextLink";
// import { Pagination } from "@/components/pagination/Pagination";


export const TourTrash = () => {
  return (
    <>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
      <PageTitle title="Thùng rác tour" />
      <ContextLink text="Quay lại danh sách" to={`/${pathAdmin}/tour/list`} />
    </div>
      {/* <TourTrashActionBar /> */}
      <TourTrashTable />
      {/* <Pagination /> */}
    </>
  );
};
