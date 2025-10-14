import { FilterBar } from "@/components/filter/FilterBar";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterDateRange } from "@/components/filter/FilterDateRange";
import { FilterSelect } from "@/components/filter/FilterSelect";
import { ACTIVE_STATUS_LIST } from "@/constants/status";

export const UserFilterBar = () => {
  return (
    <FilterBar>
      <FilterSelect
        paramKey="status"
        placeholder="Trạng thái"
        options={ACTIVE_STATUS_LIST}
      />

      <FilterDateRange />

      <FilterButtonReset />
    </FilterBar>
  );
};
