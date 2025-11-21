import { Select } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import type { Option } from "../../types";
import { useSearchParams } from "react-router";

export const FilterSelect = ({
  paramKey,
  placeholder,
  options,
}: {
  paramKey: string;
  placeholder: string;
  options: Option[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(paramKey) || "";

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(paramKey, value);
    } else {
      newParams.delete(paramKey);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="relative">
      <Select
        value={currentValue}
        onChange={handleChange}
        className="border-travel-four cursor-pointer appearance-none border-r py-4 pr-12 pl-4"
      >
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
