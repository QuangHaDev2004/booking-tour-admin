import { Link } from "react-router";
import { ActionSelect } from "../../../components/common/ActionSelect";
import { Search } from "../../../components/common/Search";
import { pathAdmin } from "../../../config/path";

export const ActionBarRole = () => {
  const ACTION_OPTIONS = [
    {
      label: "Xóa",
      value: "delete",
    },
  ];

  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <ActionSelect options={ACTION_OPTIONS} />
      <Search />
      <Link
        to={`/${pathAdmin}/setting/role/create`}
        className="bg-primary inline-block rounded-[14px] px-8 py-4 text-sm font-bold text-white lg:px-11 lg:py-[25px]"
      >
        + Tạo mới
      </Link>
    </div>
  );
};
