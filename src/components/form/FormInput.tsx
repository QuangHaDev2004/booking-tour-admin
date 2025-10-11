import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  isRequired?: boolean;
};

export const FormInput = ({
  id,
  label,
  register,
  error,
  type = "text",
  placeholder,
  readOnly,
  value,
  isRequired,
}: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-label mb-[10px] block text-sm font-semibold"
      >
        <span>{label}</span>
        {isRequired && <span className="text-error ml-1">*</span>}
      </label>
      <input
        {...register}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        readOnly={readOnly}
        value={value}
        onWheel={(e) => e.currentTarget.blur()}
        className={`${error ? "border-error" : "border-four"} text-secondary bg-three h-[52px] w-full rounded-sm border px-[22px] text-sm font-medium`}
      />
      {error && (
        <p className="text-error mt-1 text-xs font-medium">{error.message}</p>
      )}
    </div>
  );
};
