import { Badge } from "@/components/badge/Badge";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { pathAdmin } from "@/config/path";
import { useEffect, useState } from "react";
import { actionOptions } from "@/constants/actionOptions";
import { ChangeMultiSelect } from "@/components/tableActions/ChangeMultiSelect";

export const CategoryTable = () => {
  const categoryData = [
    {
      id: "1",
      name: "Danh mục 1",
      avatar: "/assets/images/ha-long.jpg",
      position: 1,
      status: { label: "Hoạt động", value: "active" },
      createdBy: { name: "Lê Văn A", time: "16:30 - 20/10/2024" },
      updatedBy: { name: "Lê Văn A", time: "16:30 - 20/10/2024" },
    },
    {
      id: "2",
      name: "Danh mục 2",
      avatar: "/assets/images/ha-long.jpg",
      position: 2,
      status: { label: "Tạm dừng", value: "inactive" },
      createdBy: { name: "Nguyễn Văn B", time: "09:15 - 05/11/2024" },
      updatedBy: { name: "Nguyễn Văn B", time: "10:00 - 06/11/2024" },
    },
    {
      id: "3",
      name: "Danh mục 3",
      avatar: "/assets/images/ha-long.jpg",
      position: 3,
      status: { label: "Hoạt động", value: "active" },
      createdBy: { name: "Trần Thị C", time: "14:20 - 15/09/2024" },
      updatedBy: { name: "Trần Thị C", time: "17:45 - 18/09/2024" },
    },
    {
      id: "4",
      name: "Danh mục 4",
      avatar: "/assets/images/ha-long.jpg",
      position: 4,
      status: { label: "Tạm dừng", value: "inactive" },
      createdBy: { name: "Phạm Văn D", time: "08:00 - 12/10/2024" },
      updatedBy: { name: "Phạm Văn D", time: "09:30 - 14/10/2024" },
    },
    {
      id: "5",
      name: "Danh mục 5",
      avatar: "/assets/images/ha-long.jpg",
      position: 5,
      status: { label: "Hoạt động", value: "active" },
      createdBy: { name: "Đỗ Thị E", time: "19:00 - 01/08/2024" },
      updatedBy: { name: "Đỗ Thị E", time: "21:10 - 02/08/2024" },
    },
  ];

  const [checkAll, setCheckAll] = useState(false);
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const handleCheckAll = (checked: boolean) => {
    setCheckAll(checked);
    if (checked) {
      setCheckItems(categoryData.map((item) => item.id));
    } else {
      setCheckItems([]);
    }
  };

  const handleCheckItem = (id: string, checked: boolean) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  // Cập nhật trạng thái CheckAll khi tất cả item được check
  useEffect(() => {
    if (checkItems.length === categoryData.length) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [categoryData.length, checkItems.length]);

  return (
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <div className="bg-table-head min-w-[1141px] px-6 py-4 shadow-md">
        <ChangeMultiSelect
          options={[
            actionOptions.active,
            actionOptions.inactive,
            actionOptions.delete,
          ]}
          endpoint={`/${pathAdmin}/category/change-multi`}
          checkAll={checkAll}
          checkItems={checkItems}
        />
      </div>
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-four border-b py-[15px] pl-[32px]">
              <CustomCheckbox checked={checkAll} setChecked={handleCheckAll} />
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Tên danh mục
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Ảnh đại diện
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
          {categoryData.map((item) => (
            <tr key={item.id} className="last:[&>td]:border-0">
              <td className="border-four border-b py-[8px] pl-[32px]">
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
              <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                {item.position}
              </td>
              <td className="border-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                {item.status.value === "active" ? (
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
                  <ButtonEdit to={`/${pathAdmin}/category/edit/${item.id}`} />
                  <ButtonDelete
                    dataApi={`/${pathAdmin}/category/delete/${item.id}`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
