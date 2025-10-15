import { useState } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type PasswordInputProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const PasswordInput = ({
  id,
  label,
  register,
  error,
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="text-secondary/80 mb-[15px] inline-block text-lg font-semibold"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          {...register}
          autoComplete="off"
          className={`bg-three h-14 w-full rounded-lg border p-4 text-lg font-semibold ${error ? "border-error" : "border-four"}`}
        />
        <div
          onClick={() => setVisible(!visible)}
          className="text-secondary/60 absolute top-1/2 right-4 size-5 -translate-y-1/2 cursor-pointer"
        >
          {visible ? (
            <FaRegEyeSlash className="size-5" />
          ) : (
            <FaRegEye className="size-5" />
          )}
        </div>
      </div>
      {error && (
        <p className="text-error mt-1 text-xs font-semibold">{error.message}</p>
      )}
    </div>
  );
};
