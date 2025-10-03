import { Select } from "@headlessui/react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa6";

type Option = {
  label: string;
  value: string;
};

type FormSelectProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: Option[];
};

export const FormSelect = ({
  id,
  label,
  register,
  error,
  options,
}: FormSelectProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-label mb-[10px] block text-sm font-semibold"
      >
        {label}
      </label>
      <div className="relative">
        <Select
          {...register}
          id={id}
          className={`text-secondary bg-three h-[52px] w-full appearance-none rounded-sm border px-[22px] text-sm font-medium ${
            error ? "border-error" : "border-four"
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <FaChevronDown className="text-secondary pointer-events-none absolute top-1/2 right-[22px] -translate-y-1/2 text-[12px]" />
      </div>
      {error && (
        <p className="text-error mt-1 text-xs font-medium">{error.message}</p>
      )}
    </div>
  );
};
