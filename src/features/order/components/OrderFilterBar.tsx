import { FilterBar } from "@/components/filter/FilterBar";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterDateRange } from "@/components/filter/FilterDateRange";
import { FilterSelect } from "@/components/filter/FilterSelect";
import {
  ORDER_STATUS_LIST,
  PAYMENT_METHOD_LIST,
  PAYMENT_STATUS_LIST,
} from "../constants/order.constants";

export const OrderFilterBar = () => {
  return (
    <FilterBar>
      <FilterSelect
        paramKey="status"
        placeholder="Trạng thái"
        options={ORDER_STATUS_LIST}
      />

      <FilterDateRange />

      <FilterSelect
        paramKey="paymentMethod"
        placeholder="Phương thức thanh toán"
        options={PAYMENT_METHOD_LIST}
      />

      <FilterSelect
        paramKey="paymentStatus"
        placeholder="Trạng thái thanh toán"
        options={PAYMENT_STATUS_LIST}
      />

      <FilterButtonReset />
    </FilterBar>
  );
};
