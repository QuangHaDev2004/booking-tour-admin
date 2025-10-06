import { Select } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import type { Option } from "../../types";

export const FilterSelect = ({
  placeholder,
  options,
}: {
  placeholder: string;
  options: Option[];
}) => {
  return (
    <div className="relative">
      <Select className="appearance-none border-r border-[#D5D5D5] p-4 pr-12 lg:p-6 lg:pr-12">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[12px]" />
    </div>
  );
};
