import { PageTitle } from "@/components/pageTitle/PageTitle";
import { OrderFilterBar } from "./components/OrderFilterBar";
import { OrderTable } from "./components/OrderTable";
import { Pagination } from "@/components/pagination/Pagination";

export const OrderList = () => {
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Quản lý đơn hàng" />
      </div>
      <OrderFilterBar />
      <OrderTable />
      {/* <Pagination /> */}
    </>
  );
};
