import { useSearchParams } from "react-router";

export const FilterDateRange = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  const handleChange = (paramsKey: "startDate" | "endDate", value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(paramsKey, value);
    } else {
      newParams.delete(paramsKey);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4">
      <input
        type="date"
        value={startDate}
        onChange={(event) => handleChange("startDate", event.target.value)}
        className="w-28 cursor-pointer"
      />
      <span>-</span>
      <input
        type="date"
        value={endDate}
        onChange={(event) => handleChange("endDate", event.target.value)}
        className="w-28 cursor-pointer"
      />
    </div>
  );
};
