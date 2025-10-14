import { ButtonCopy } from "@/components/button/ButtonCopy";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { TableActionBar } from "@/components/table/TableActionBar";
import { pathAdmin } from "@/config/path";
import { actionOptions } from "@/constants/actionOptions";
import { useCheckbox } from "@/hooks/useCheckbox";

export const ContactTable = () => {
  const users = [
    {
      id: "u1a9sd8f7",
      email: "nguyenvana@example.com",
      createdAt: "2025-10-10T09:32:00Z",
    },
    {
      id: "u2b7cx4k3",
      email: "tranthib@example.com",
      createdAt: "2025-10-12T15:45:00Z",
    },
  ];

  const { checkAll, checkItems, handleCheckAll, handleCheckItem } = useCheckbox(
    { data: users },
  );

  return (
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <TableActionBar
        options={[actionOptions.delete]}
        endpoint={`/${pathAdmin}/contact/change-multi`}
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
              Email
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Ngày tạo
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((item) => (
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
                  {item.email}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  {item.createdAt}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div className="border-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
                    <ButtonCopy email={item.email} />
                    <ButtonDelete endpoint={`/${pathAdmin}/contact/delete`} />
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
