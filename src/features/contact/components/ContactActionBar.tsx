import { Search } from "@/components/common/Search";

export const ContactActionBar = () => {
  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <Search placeholder="Nhập email..." />
    </div>
  );
};
