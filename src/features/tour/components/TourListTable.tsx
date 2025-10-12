import { Badge } from "@/components/badge/Badge";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { TableActionBar } from "@/components/table/TableActionBar";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { pathAdmin } from "@/config/path";
import { actionOptions } from "@/constants/actionOptions";
import { useCheckbox } from "@/hooks/useCheckbox";

export const TourListTable = () => {
  const tourData = [
    {
      id: "1",
      name: "Tour Hạ Long",
      image: "/assets/images/ha-long.jpg",
      price: { NL: "1.900.000đ", TE: "1.600.000đ", EB: "1.000.000đ" },
      quantity: { NL: 30, TE: 20, EB: 10 },
      position: 1,
      status: "active",
      createdBy: "Lê Văn A",
      createdAt: "16:30 - 20/10/2024",
      updatedBy: "Lê Văn A",
      updatedAt: "16:30 - 20/10/2024",
    },
    {
      id: "2",
      name: "Tour Phú Quốc",
      image: "/assets/images/ha-long.jpg",
      price: { NL: "2.500.000đ", TE: "2.000.000đ", EB: "1.300.000đ" },
      quantity: { NL: 25, TE: 18, EB: 8 },
      position: 2,
      status: "active",
      createdBy: "Trần Thị B",
      createdAt: "10:00 - 15/09/2024",
      updatedBy: "Trần Thị B",
      updatedAt: "10:00 - 15/09/2024",
    },
    {
      id: "3",
      name: "Tour Đà Lạt",
      image: "/assets/images/ha-long.jpg",
      price: { NL: "1.800.000đ", TE: "1.500.000đ", EB: "900.000đ" },
      quantity: { NL: 20, TE: 15, EB: 5 },
      position: 3,
      status: "inactive",
      createdBy: "Nguyễn Văn C",
      createdAt: "09:45 - 05/08/2024",
      updatedBy: "Nguyễn Văn C",
      updatedAt: "09:45 - 05/08/2024",
    },
  ];

  const { checkAll, checkItems, handleCheckAll, handleCheckItem } = useCheckbox(
    { data: tourData },
  );

  return (
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <TableActionBar
        options={[
          actionOptions.active,
          actionOptions.inactive,
          actionOptions.delete,
        ]}
        endpoint={`/${pathAdmin}/tour/change-multi`}
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
              Tên tour
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Ảnh đại diện
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Giá
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Còn lại
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Vị trí
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Trạng thái
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Tạo bởi
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Cập nhật bởi
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {tourData.length > 0 ? (
            tourData.map((item) => (
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
                <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                  <img
                    src="/assets/images/ha-long.jpg"
                    className="mx-auto h-[60px] w-[60px] rounded-md object-cover"
                  />
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div>NL: 1.900.000đ</div>
                  <div>TE: 1.600.000đ</div>
                  <div>EB: 1.000.000đ</div>
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div>NL: 30</div>
                  <div>TE: 20</div>
                  <div>EB: 10</div>
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                  {item.position}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                  {item.status === "active" ? (
                    <Badge className="badge-green" content="Hoạt động" />
                  ) : (
                    <Badge className="badge-red" content="Tạm dừng" />
                  )}
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div>Lê Văn A</div>
                  <div>16:30 - 20/10/2024</div>
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div>Lê Văn A</div>
                  <div>16:30 - 20/10/2024</div>
                </td>
                <td className="border-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                  <div className="border-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
                    <ButtonEdit to={`/${pathAdmin}/tour/edit`} />
                    <ButtonDelete endpoint={`/${pathAdmin}/tour/delete`} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <EmptyTableRow colSpan={9} />
          )}
        </tbody>
      </table>
    </div>
  );
};
