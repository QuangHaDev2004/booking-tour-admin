import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputsProps = {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const TextInput = ({
  id,
  label,
  type = "text",
  register,
  error,
}: TextInputsProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-secondary/80 mb-2 inline-block text-lg font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        autoComplete="off"
        className={`bg-three h-14 w-full rounded-lg border p-4 text-lg font-semibold ${error ? "border-error" : "border-four"}`}
      />
      {error && (
        <p className="text-error mt-1 text-xs font-semibold">{error.message}</p>
      )}
    </div>
  );
};
