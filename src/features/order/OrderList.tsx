import { PageTitle } from "@/components/pageTitle/PageTitle";
import { OrderFilterBar } from "./components/OrderFilterBar";
import { OrderTable } from "./components/OrderTable";
import { Pagination } from "@/components/pagination/Pagination";
import { OrderActionBar } from "./components/OrderActionBar";

export const OrderList = () => {
  return (
    <>
      <PageTitle title="Quản lý đơn hàng" />
      <OrderFilterBar />
      <OrderActionBar />
      <OrderTable />
      <Pagination />
    </>
  );
};
