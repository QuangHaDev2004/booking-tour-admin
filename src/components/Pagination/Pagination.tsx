/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router";

export const Pagination = ({
  pagination,
  list,
}: {
  pagination: {
    skip: number;
    totalRecord: number;
    totalPage: number;
  };
  list: any;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "";

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("page", value);
    } else {
      params.delete("page");
    }
    setSearchParams(params);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="text-travel-secondary/60 text-sm font-semibold">
        Hiển thị {pagination.skip + 1} - {pagination.skip + list.length} của{" "}
        {pagination.totalRecord}
      </div>
      <select
        value={page}
        onChange={handlePageChange}
        className="select border-travel-secondary/20 h-10 w-32 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
      >
        {Array(pagination.totalPage)
          .fill("")
          .map((_, index) => (
            <option key={index} value={index + 1}>
              Trang {index + 1}
            </option>
          ))}
      </select>
    </div>
  );
};
