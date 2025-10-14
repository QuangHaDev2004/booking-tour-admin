/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import CurrencyInput from "react-currency-input-field";

type InputItem = {
  id: string;
  label: string;
  placeholder?: string;
};

type FormInputProps = {
  title: string;
  items: InputItem[];
  register: UseFormRegister<any>;
  control: Control<any>;
  isPrice?: boolean;
  type?: string;
};

export const FormInputGroup = ({
  title,
  items,
  register,
  control,
  isPrice,
  type = "text",
}: FormInputProps) => {
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
            {isPrice ? (
              <Controller
                name={item.id}
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                    id={item.id}
                    value={field.value || ""}
                    onValueChange={(value) => field.onChange(value || "")}
                    intlConfig={{ locale: "vi-VN" }}
                    allowNegativeValue={false}
                    onWheel={(e) => e.currentTarget.blur()}
                    autoComplete="off"
                    className="border-four text-secondary bg-three h-[52px] w-full flex-1 rounded-sm border px-[22px] text-sm font-medium"
                  />
                )}
              />
            ) : (
              <input
                id={item.id}
                {...register(item.id)}
                type={type}
                autoComplete="off"
                onWheel={(e) => e.currentTarget.blur()}
                placeholder={item.placeholder}
                min={0}
                className="border-four text-secondary bg-three h-[52px] w-full flex-1 rounded-sm border px-[22px] text-sm font-medium"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
