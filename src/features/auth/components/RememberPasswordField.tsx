import { pathAdmin } from "@/config/path";
import { Checkbox, Field, Label } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";

export const RememberPasswordField = ({
  checked,
  handleCheckboxChange,
}: {
  checked: boolean;
  handleCheckboxChange: (checked: boolean) => void;
}) => {
  return (
    <div className="text-secondary/60 flex flex-wrap justify-between gap-4 text-lg font-semibold">
      <Field className="flex items-center gap-4">
        <Checkbox
          checked={checked}
          onChange={(checked) => handleCheckboxChange(checked)}
          className="group data-checked:bg-primary data-checked:border-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-[#D5D5D5] bg-white focus-visible:outline-none data-focus:outline-none"
        >
          <FaCheck className="hidden size-3 fill-white group-data-checked:block" />
        </Checkbox>
        <Label>Nhớ mật khẩu</Label>
      </Field>
      <Link
        to={`/${pathAdmin}/account/forgot-password`}
        className="hover:text-primary transition-all duration-300"
      >
        Quên mật khẩu?
      </Link>
    </div>
  );
};
