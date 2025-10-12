import { FilterBar } from "@/components/filter/FilterBar";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterDateRange } from "@/components/filter/FilterDateRange";
import { FilterSelect } from "@/components/filter/FilterSelect";
import { actionOptions } from "@/constants/actionOptions";

export const TourListFilterBar = () => {
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
          { label: "Nguyễn Văn A", value: "1" },
          { label: "Nguyễn Văn B", value: "2" },
        ]}
      />

      <FilterDateRange />

      <FilterSelect
        paramKey="category"
        placeholder="Danh mục"
        options={[
          { label: "Danh mục 1", value: "1" },
          { label: "Danh mục 2", value: "2" },
        ]}
      />

      <FilterSelect
        paramKey="price"
        placeholder="Mức giá"
        options={[
          { label: "1tr đến 5tr", value: "1" },
          { label: "Trên 5tr", value: "2" },
        ]}
      />

      <FilterButtonReset />
    </FilterBar>
  );
};
