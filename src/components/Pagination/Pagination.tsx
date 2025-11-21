import { Select } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { useSearchParams } from "react-router";

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageParam = searchParams.get("page") || "";

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("page", value);
    } else {
      newParams.delete("page");
    }
    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="text-travel-secondary/60 text-sm font-semibold">
        Hiển thị 1 - 9 của 78
      </div>
      <div className="relative">
        <Select
          value={currentPageParam}
          onChange={handlePageChange}
          className="text-travel-secondary/60 border-travel-four cursor-pointer appearance-none rounded-lg border py-1.5 pr-12 pl-[14px] font-semibold"
        >
          <option value="1">Trang 1</option>
          <option value="2">Trang 2</option>
          <option value="3">Trang 3</option>
        </Select>
        <FaChevronDown className="text-travel-secondary/60 pointer-events-none absolute top-1/2 right-[14px] -translate-y-1/2 text-[12px]" />
      </div>
    </div>
  );
};
