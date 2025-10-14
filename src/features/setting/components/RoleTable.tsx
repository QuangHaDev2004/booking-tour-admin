import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { pathAdmin } from "@/config/path";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { useCheckbox } from "@/hooks/useCheckbox";
import { TableActionBar } from "@/components/table/TableActionBar";
import { actionOptions } from "@/constants/actionOptions";

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
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <TableActionBar
        options={[
          actionOptions.delete,
        ]}
        endpoint={`/${pathAdmin}/setting/role/change-multi`}
        checkAll={checkAll}
        checkItems={checkItems}
      />
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-four border-b py-[15px] pl-6">
              <CustomCheckbox checked={checkAll} setChecked={handleCheckAll} />
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Tên nhóm quyền
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Mô tả ngắn
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {roleList.length > 0 ? (
            roleList.map((item) => (
              <tr key={item.id} className="last:[&>td]:border-0">
                <td className="border-four border-b py-[8px] pl-6">
                  <CustomCheckbox
                    checked={checkItems.includes(item.id)}
                    setChecked={(checked: boolean) =>
                      handleCheckItem(item.id, checked)
                    }
                  />
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.name}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.description}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div className="border-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
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
  );
};
