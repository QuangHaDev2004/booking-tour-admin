import { IoSearch } from "react-icons/io5";

export const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="border-four inline-flex w-[366px] items-center gap-4 rounded-lg border bg-white p-4 text-sm font-bold">
      <IoSearch className="text-secondary/60 text-[20px]" />
      <input type="text" placeholder={placeholder} className="flex-1" />
    </div>
  );
};
