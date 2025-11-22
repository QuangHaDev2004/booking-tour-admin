/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRotateLeft } from "react-icons/fa6";
import { useSearchParams } from "react-router";
import { IoFilter } from "react-icons/io5";
import { useCategoryList } from "../hooks/useCategoryList";
import type { AccountAdminItem } from "@/types/account";

export const CategoryFilterBar = () => {
  const { accountAdminList } = useCategoryList();
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "";
  const createdBy = searchParams.get("createdBy") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  const handleCategoryFilter = (key: string, event: any) => {
    const params = new URLSearchParams(searchParams);
    const value = event.target.value;
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <>
      <div className="text-travel-secondary mb-2 flex items-center gap-3 text-lg font-semibold italic">
        <IoFilter className="size-5" /> Bộ lọc
      </div>
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={status}
          onChange={(event) => handleCategoryFilter("status", event)}
          className="select border-travel-secondary/20 text-travel-secondary h-10 w-[140px] rounded-4xl border px-4 text-sm font-semibold"
        >
          <option value="">Trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Tạm dừng</option>
        </select>

        <select
          value={createdBy}
          onChange={(event) => handleCategoryFilter("createdBy", event)}
          className="select border-travel-secondary/20 text-travel-secondary h-10 w-[160px] rounded-4xl border px-4 text-sm font-semibold"
        >
          <option value="">Người tạo</option>
          {accountAdminList.map((item: AccountAdminItem) => (
            <option key={item.id} value={item.id}>
              {item.fullName}
            </option>
          ))}
        </select>

        <div className="border-travel-secondary/20 text-travel-secondary flex h-10 items-center gap-4 rounded-4xl border px-4 text-sm font-semibold">
          <input
            type="date"
            className="w-28"
            value={startDate}
            onChange={(event) => handleCategoryFilter("startDate", event)}
          />
          <span>-</span>
          <input
            type="date"
            className="w-28"
            value={endDate}
            onChange={(event) => handleCategoryFilter("endDate", event)}
          />
        </div>

        <button
          onClick={handleReset}
          className="text-travel-red border-travel-red flex h-10 cursor-pointer items-center gap-3 rounded-4xl border px-4 text-sm font-semibold"
        >
          <FaRotateLeft className="size-4" />
          Xóa bộ lọc
        </button>
      </div>
    </>
  );
};
