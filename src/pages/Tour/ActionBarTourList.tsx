import { Link } from "react-router";
import { pathAdmin } from "../../config/path";
import { Search } from "../../components/actionBar/Search";
// import { ActionSelect } from "../../components/tableActions/ChangeMultiSelect";

export const ActionBarTourList = () => {
  const ACTION_OPTIONS = [
    {
      label: "Hoạt động",
      value: "active",
    },
    {
      label: "Tạm dừng",
      value: "inactive",
    },
    {
      label: "Xóa",
      value: "delete",
    },
  ];

  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      {/* <ActionSelect options={ACTION_OPTIONS} /> */}

      <Search />

      <Link
        to={`/${pathAdmin}/tour/create`}
        className="bg-primary inline-block rounded-[14px] px-8 py-4 text-sm font-bold text-white lg:px-11 lg:py-[25px]"
      >
        + Tạo mới
      </Link>

      <Link
        to={`/${pathAdmin}/tour/trash`}
        className="inline-block rounded-[14px] bg-[rgba(239,55,38,0.2)] px-8 py-4 text-sm font-bold text-[#EF3826] lg:px-11 lg:py-[25px]"
      >
        Thùng rác
      </Link>
    </div>
  );
};
