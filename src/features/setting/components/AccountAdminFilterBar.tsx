import { FaFilter } from "react-icons/fa6";
import { FilterSelect } from "../../../components/filter/FilterSelect";
import { FilterDateRange } from "../../../components/filter/FilterDateRange";
import { FilterButtonReset } from "../../../components/filter/FilterButtonReset";

export const AccountAdminFilterBar = () => {
  return (
    <div className="text-secondary mb-[15px] inline-flex flex-wrap items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
      <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4 lg:p-6">
        <FaFilter className="text-lg" />
        Bộ lọc
      </div>

      <FilterSelect
        placeholder="Trạng thái"
        options={[
          { label: "Hoạt động", value: "active" },
          { label: "Tạm dừng", value: "inactive" },
        ]}
      />

      <FilterDateRange />

      <FilterSelect
        placeholder="Nhóm quyền"
        options={[
          { label: "q1", value: "1" },
          { label: "q2", value: "2" },
        ]}
      />

      <FilterButtonReset />
    </div>
  );
};
