import { PageTitle } from "@/components/pageTitle/PageTitle";
import { TourListFilterBar } from "./components/TourListFilterBar";
import { TourListTable } from "./components/TourListTable";
import { Pagination } from "@/components/pagination/Pagination";
import { ButtonCreate } from "@/components/button/ButtonCreate";
import { ButtonTrash } from "@/components/button/ButtonTrash";
import { pathAdmin } from "@/config/path";
import { useTourList } from "./hooks/useTourList";

export const TourList = () => {
  const { pagination, tourList } = useTourList();

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Quản lý tour" />
        <div className="flex flex-wrap items-center gap-2">
          <ButtonTrash to={`/${pathAdmin}/tour/trash`} />
          <ButtonCreate to={`/${pathAdmin}/tour/create`} />
        </div>
      </div>
      <TourListFilterBar />
      <TourListTable />
      <Pagination pagination={pagination} list={tourList} />
    </>
  );
};
