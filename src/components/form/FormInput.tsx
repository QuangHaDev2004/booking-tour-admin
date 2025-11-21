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
        className="text-travel-label mb-[10px] block text-sm font-semibold"
      >
        <span>{label}</span>
        {isRequired && <span className="text-travel-error ml-1">*</span>}
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
        min={0}
        className={`${error ? "border-travel-error" : "border-travel-four"} text-travel-secondary bg-travel-three h-[52px] w-full rounded-sm border px-[22px] text-sm font-medium`}
      />
      {error && (
        <p className="text-travel-error mt-1 text-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};
