/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormSelectProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: any;
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
        className="text-travel-label mb-[10px] block text-sm font-semibold"
      >
        {label}
      </label>
      <select
        {...register}
        className="select bg-travel-three text-travel-secondary h-[52px] w-full px-[22px] text-sm font-medium"
      >
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <div className="relative">
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
        <FaChevronDown className="pointer-events-none absolute top-1/2 right-[22px] size-3 -translate-y-1/2 text-[#A6A6A6]" />
      </div> */}
      {error && (
        <p className="text-travel-error mt-1 text-sm font-medium">
          {error.message}
        </p>
      )}
    </div>
  );
};
