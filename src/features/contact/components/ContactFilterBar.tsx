import { FilterBar } from "@/components/filter/FilterBar";
import { FilterButtonReset } from "@/components/filter/FilterButtonReset";
import { FilterDateRange } from "@/components/filter/FilterDateRange";

export const ContactFilterBar = () => {
  return (
    <FilterBar>
      <FilterDateRange />
      <FilterButtonReset />
    </FilterBar>
  );
};
