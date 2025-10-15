export const ButtonSubmit = ({
  label,
  disabled = false,
}: {
  label: string;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      className={`h-14 w-full rounded-lg text-xl font-bold text-white capitalize transition-all duration-300 ${disabled ? "cursor-not-allowed bg-gray-400" : "bg-primary/90 hover:bg-primary cursor-pointer"}`}
    >
      {label}
    </button>
  );
};
