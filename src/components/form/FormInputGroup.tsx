/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister } from "react-hook-form";

type InputItem = {
  id: string;
  label: string;
  placeholder?: string;
};

type FormInputProps = {
  title: string;
  items: InputItem[];
  register: UseFormRegister<any>;
};

export const FormInputGroup = ({ title, items, register }: FormInputProps) => {
  return (
    <div>
      <label className="text-label mb-[10px] block text-sm font-semibold">
        {title}
      </label>
      <div className="flex flex-col gap-[5px]">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-5">
            <label
              htmlFor={item.id}
              className="text-label block w-[89px] text-sm font-semibold"
            >
              {item.label}
            </label>
            <input
              id={item.id}
              {...register(item.id)}
              type="text"
              autoComplete="off"
              placeholder={item.placeholder}
              className="border-four text-secondary bg-three h-[52px] w-full flex-1 rounded-sm border px-[22px] text-sm font-medium"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
