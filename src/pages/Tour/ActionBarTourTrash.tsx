import { Link } from "react-router";
import { pathAdmin } from "../../config/path";
import { Search } from "../../components/common/Search";
import { ActionSelect } from "../../components/common/ActionSelect";

export const ActionBarTourTrash = () => {
  const ACTION_OPTIONS = [
    {
      label: "Khôi phục",
      value: "undo",
    },
    {
      label: "Xóa vĩnh viễn",
      value: "destroy",
    },
  ];

  return (
    <div className="mb-[30px] flex flex-wrap items-center gap-4">
      <ActionSelect options={ACTION_OPTIONS} />

      <Search />

      <Link
        to={`/${pathAdmin}/tour/list`}
        className="bg-primary inline-block rounded-[14px] px-8 py-4 text-sm font-bold text-white lg:px-11 lg:py-[25px]"
      >
        Quay lại danh sách
      </Link>
    </div>
  );
};
