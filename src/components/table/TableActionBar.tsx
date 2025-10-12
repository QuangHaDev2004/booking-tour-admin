import type { Option } from "@/types";
import { Select } from "@headlessui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type Props = {
  options: Option[];
  checkAll?: boolean;
  checkItems?: string[];
  endpoint: string;
};

export const TableActionBar = ({
  options,
  checkAll,
  checkItems,
  endpoint,
}: Props) => {
  const [selectedOption, setselectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedOption(event.target.value);
  };

  const disabled =
    (!checkAll && checkItems?.length === 0) || selectedOption === "";

  const handleSubmitChangeMulti = () => {
    const dataFinal = {
      option: selectedOption,
      ids: checkItems,
    };

    console.log(dataFinal);
    console.log(endpoint);
  };

  return (
    <div className="bg-table-head min-w-[1141px] px-6 py-4 shadow-md">
      <div className="text-secondary border-four inline-flex items-center overflow-hidden rounded-lg border bg-white text-sm font-bold">
        <div className="relative">
          <Select
            onChange={handleChange}
            className="border-four cursor-pointer appearance-none border-r py-4 pr-12 pl-4"
          >
            <option value="">-- Hành động --</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[12px]" />
        </div>
        <button
          disabled={disabled}
          onClick={handleSubmitChangeMulti}
          className={`px-6 py-4 font-bold text-white transition-all duration-300 ${disabled ? "cursor-not-allowed bg-gray-300" : "bg-primary hover:bg-primary/90 cursor-pointer"}`}
        >
          Áp dụng
        </button>
      </div>
    </div>
  );
};
