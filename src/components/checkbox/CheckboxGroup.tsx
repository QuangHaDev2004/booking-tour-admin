import { Checkbox, Field, Label } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

type CheckboxGroupProps = {
  label: string;
  value: string;
  // checked: boolean;
  handleCheckboxChange: (value: string, checked: boolean) => void;
};

export const CheckboxGroup = ({
  label,
  value,
  // checked,
  handleCheckboxChange,
}: CheckboxGroupProps) => {
  return (
    <Field className="flex items-center gap-[14px]">
      <Checkbox
        className="group data-checked:bg-primary data-checked:border-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border border-[#D5D5D5] bg-white focus-visible:outline-none data-focus:outline-none"
        onChange={(checked) => handleCheckboxChange(value, checked)}
      >
        <FaCheck className="hidden size-3 fill-white group-data-checked:block" />
      </Checkbox>
      <Label className="text-secondary text-sm font-normal">{label}</Label>
    </Field>
  );
};
