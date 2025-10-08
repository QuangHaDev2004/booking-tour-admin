import { Search } from "../../components/common/Search";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Pagination } from "../../components/pagination/Pagination";
import { FilterBarOrder } from "./FilterBarOrder";
import { OrderTable } from "./OrderTable";

export const OrderList = () => {
  return (
    <>
      <PageTitle title="Quản lý đơn hàng" />
      <FilterBarOrder />
      <div className="mb-[30px]">
        <Search />
      </div>
      <OrderTable />
      <Pagination />
    </>
  );
};
