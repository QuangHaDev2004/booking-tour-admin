import { FilterBar } from "@/components/filter/FilterBar";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterDateRange } from "@/components/filter/FilterDateRange";
import { FilterSelect } from "@/components/filter/FilterSelect";
import { ACTIVE_STATUS_LIST } from "@/constants/status";

export const AccountAdminFilterBar = () => {
  return (
    <FilterBar>
      <FilterSelect
        paramKey="status"
        placeholder="Trạng thái"
        options={ACTIVE_STATUS_LIST}
      />

      <FilterDateRange />

      <FilterSelect
        paramKey="role"
        placeholder="Nhóm quyền"
        options={[
          { label: "q1", value: "1" },
          { label: "q2", value: "2" },
        ]}
      />

      <FilterButtonReset />
    </FilterBar>
  );
};
