import { Checkbox } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

export const CustomCheckbox = ({
  checked,
  setChecked,
}: {
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={setChecked}
        className="group data-checked:bg-primary data-checked:border-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border border-[#D5D5D5] bg-white data-focus:outline-none"
      >
        <FaCheck className="hidden size-3 fill-white group-data-checked:block" />
      </Checkbox>
    </>
  );
};
