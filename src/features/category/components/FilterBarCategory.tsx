import { actionOptions } from "@/constants/actionOptions";
import { FilterSelect } from "@/components/filter/FilterSelect";
import { FilterDateRange } from "@/components/filter/FilterDateRange";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterBar } from "@/components/filter/FilterBar";

export const FilterBarCategory = () => {
  return (
    <FilterBar>
      <FilterSelect
        paramKey="status"
        placeholder="Trạng thái"
        options={[actionOptions.active, actionOptions.inactive]}
      />

      <FilterSelect
        paramKey="createdBy"
        placeholder="Người tạo"
        options={[
          { label: "Nguyễn Văn A", value: "id1" },
          { label: "Nguyễn Văn B", value: "id2" },
        ]}
      />

      <FilterDateRange />

      <FilterButtonReset />
    </FilterBar>
  );
};
