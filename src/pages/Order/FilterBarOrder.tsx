import { FaFilter } from "react-icons/fa6";
import { FilterSelect } from "../../components/filter/FilterSelect";
import { FilterDateRange } from "../../components/filter/FilterDateRange";
import { FilterButtonReset } from "../../components/filter/FilterButtonReset";

export const FilterBarOrder = () => {
  return (
    <div className="text-secondary mb-[15px] inline-flex flex-wrap items-center rounded-[14px] border border-[#D5D5D5] bg-white text-sm font-bold">
      <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4 lg:p-6">
        <FaFilter className="text-lg" />
        Bộ lọc
      </div>

      <FilterSelect
        placeholder="Trạng thái"
        options={[
          { label: "Khởi tạo", value: "initial" },
          { label: "Hoàn thành", value: "done" },
          { label: "Đã hủy", value: "cancel" },
        ]}
      />

      <FilterDateRange />

      <FilterSelect
        placeholder="Phương thức thanh toán"
        options={[
          { label: "pt1", value: "1" },
          { label: "pt2", value: "2" },
        ]}
      />

      <FilterSelect
        placeholder="Trạng thái thanh toán"
        options={[
          { label: "tt1", value: "1" },
          { label: "tt2", value: "2" },
        ]}
      />

      <FilterButtonReset />
    </div>
  );
};
