export const ButtonSubmit = ({
  label,
  isPending,
}: {
  label: string;
  isPending: boolean;
}) => {
  return (
    <button
      className={`h-11 w-full rounded-lg text-[16px] font-bold text-white capitalize transition-all duration-300 ${isPending ? "cursor-not-allowed bg-gray-400" : "bg-travel-primary/90 hover:bg-travel-primary cursor-pointer"}`}
    >
      {isPending ? "Đang xử lý" : label}
    </button>
  );
};
