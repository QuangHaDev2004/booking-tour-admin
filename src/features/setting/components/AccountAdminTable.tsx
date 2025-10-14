import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { pathAdmin } from "@/config/path";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { Badge } from "@/components/badge/Badge";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { useCheckbox } from "@/hooks/useCheckbox";
import { TableActionBar } from "@/components/table/TableActionBar";
import { actionOptions } from "@/constants/actionOptions";

const adminAccounts = [
  {
    id: "a1f9c23b",
    fullName: "Nguyễn Văn A",
    avatar: "/assets/images/ha-long.jpg",
    email: "nguyenvana@example.com",
    phone: "0905123456",
    role: "Quản trị viên",
    positionCompany: "Trưởng phòng",
    statusInfo: {
      label: "Hoạt động",
      color: "green",
    },
  },
  {
    id: "b4e7d91f",
    fullName: "Trần Thị B",
    avatar: "/assets/images/ha-long.jpg",
    email: "tranthib@example.com",
    phone: "0987654321",
    role: "Biên tập viên",
    positionCompany: "Nhân viên",
    statusInfo: {
      label: "Khởi tạo",
      color: "yellow",
    },
  },
];

export const AccountAdminTable = () => {
  const { checkAll, checkItems, handleCheckAll, handleCheckItem } = useCheckbox(
    { data: adminAccounts },
  );

  return (
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <TableActionBar
        options={[
          actionOptions.initial,
          actionOptions.active,
          actionOptions.inactive,
          actionOptions.delete,
        ]}
        endpoint={`/${pathAdmin}/setting/account-admin/change-multi`}
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
              Họ tên
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Ảnh đại diện
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Email
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Số điện thoại
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Nhóm quyền
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Chức vụ
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Trạng thái
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {adminAccounts.length > 0 ? (
            adminAccounts.map((item) => (
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
                  {item.fullName}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                  <img
                    src="/assets/images/ha-long.jpg"
                    className="mx-auto h-[60px] w-[60px] rounded-md object-cover"
                  />
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.email}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.phone}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.role}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.positionCompany}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <Badge
                    className={`badge-${item.statusInfo.color}`}
                    content={item.statusInfo.label}
                  />
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div className="border-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
                    <ButtonEdit
                      to={`/${pathAdmin}/setting/account-admin/edit`}
                    />
                    <ButtonDelete
                      endpoint={`/${pathAdmin}/setting/account-admin/delete`}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <EmptyTableRow colSpan={8} />
          )}
        </tbody>
      </table>
    </div>
  );
};
