export const ButtonSubmit = ({
  text = "Tạo mới",
  isPending,
}: {
  text?: string;
  isPending: boolean;
}) => {
  return (
    <div className="col-span-1 text-center md:col-span-2">
      <button
        disabled={isPending}
        className={`h-[56px] w-[275px] rounded-xl text-[18px] font-bold text-white ${isPending ? "cursor-not-allowed bg-gray-400" : "bg-travel-primary hover:bg-travel-primary/90 cursor-pointer"}`}
      >
        {isPending ? "Đang xử lý..." : text}
      </button>
    </div>
  );
};
