/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRotateLeft, FaSliders } from "react-icons/fa6";
import { useSearchParams } from "react-router";

export const ContactFilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="text-travel-secondary flex items-center gap-3 text-lg font-semibold italic">
          <FaSliders className="size-5" /> Bộ lọc
        </div>

        <div className="border-travel-secondary/20 text-travel-secondary flex h-10 items-center gap-4 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md">
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
          className="text-travel-red border-travel-red flex h-10 cursor-pointer items-center gap-3 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
        >
          <FaRotateLeft className="size-4" />
          Xóa bộ lọc
        </button>
      </div>
    </>
  );
};
