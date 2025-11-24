import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { pathAdmin } from "@/config/path";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { useCheckbox } from "@/hooks/useCheckbox";
import { TableActionBar } from "@/components/table/TableActionBar";
import { actionOptions } from "@/constants/actionOptions";
import { Search } from "@/components/common/Search";

const roleList = [
  {
    id: "r1a23f9b",
    name: "Quản trị viên",
    description: "Có đầy đủ các quyền",
  },
  {
    id: "r2c84g7d",
    name: "Biên tập viên",
    description: "Được phép chỉnh sửa và đăng bài viết",
  },
  {
    id: "r3h19k2x",
    name: "Nhân viên hỗ trợ",
    description: "Chỉ được xem và phản hồi yêu cầu khách hàng",
  },
  {
    id: "r4p57m8q",
    name: "Quản lý nội dung",
    description: "Có quyền duyệt và ẩn bài viết",
  },
  {
    id: "r5n63v4e",
    name: "Cộng tác viên",
    description: "Có thể tạo bài viết chờ duyệt",
  },
];

export const RoleTable = () => {
  const { checkAll, checkItems, handleCheckAll, handleCheckItem } = useCheckbox(
    { data: roleList },
  );

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="border-travel-secondary/20 text-travel-secondary flex h-10 items-center overflow-hidden rounded-4xl border bg-white text-sm font-semibold shadow-md">
          <select
            // value={action}
            // onChange={(event) => setAction(event.target.value)}
            className="select h-full w-[160px] border-none px-4"
          >
            <option value="">Chọn hành động</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Tạm dừng</option>
            <option value="delete">Xóa</option>
          </select>
          {/* <button
                  disabled={isDisabled}
                  onClick={handleChangeMulti}
                  className={`border-travel-secondary/20 h-full border-l px-4 ${isDisabled ? "text-travel-secondary/80 cursor-not-allowed" : "text-travel-red cursor-pointer"}`}
                >
                  Áp dụng
                </button> */}
        </div>
        <Search placeholder="Nhập tên nhóm quyền..." />
      </div>

      <div className="srcoll-table border-travel-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white shadow-md">
        <table className="text-travel-secondary w-full min-w-[1141px] border-collapse">
          <thead>
            <tr>
              <th className="border-travel-four border-b p-4 text-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary border-travel-secondary/20 hover:border-travel-primary border"
                  // checked={
                  //   categoryList.length > 0 &&
                  //   selectedIds.length === categoryList.length
                  // }
                  // onChange={(event) => handleCheckAll(event)}
                />
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Tên nhóm quyền
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Mô tả ngắn
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {roleList.length > 0 ? (
              roleList.map((item) => (
                <tr key={item.id} className="last:[&>td]:border-0">
                  <td className="border-travel-four border-b px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary border-travel-secondary/20 hover:border-travel-primary border"
                      value={item.id}
                      // checked={selectedIds.includes(item.id)}
                      // onChange={(event) => handleCheckItem(item.id, event)}
                    />
                  </td>
                  <td className="border-travel-four border-b px-4 py-2 text-left text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border-travel-four border-b px-4 py-2 text-left text-sm font-semibold">
                    {item.description}
                  </td>
                  <td className="border-travel-four border-b px-4 py-2 text-left text-sm font-semibold">
                    <div className="border-travel-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
                      <ButtonEdit to={`/${pathAdmin}/setting/role/edit`} />
                      <ButtonDelete
                        endpoint={`/${pathAdmin}/setting/role/delete`}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <EmptyTableRow colSpan={3} />
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
