import { Badge } from "@/components/badge/Badge";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { CustomCheckbox } from "@/components/checkbox/Checkbox";
import { pathAdmin } from "@/config/path";
import { actionOptions } from "@/constants/actionOptions";
import { TableActionBar } from "@/components/table/TableActionBar";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { useCheckbox } from "@/hooks/useCheckbox";
import { useCategoryList } from "../hooks/useCategoryList";
import type { CategoryItem } from "@/types/category";
import dayjs from "dayjs";
import { useCategoryDelete } from "../hooks/useCategoryDelete";

export const CategoryTable = () => {
  const { categoryList } = useCategoryList();
  const { mutate, isPending } = useCategoryDelete();
  // console.log(categoryList);

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

  const { checkAll, checkItems, handleCheckAll, handleCheckItem } = useCheckbox(
    { data: categoryData },
  );

  return (
    <div className="srcoll-table border-travel-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <TableActionBar
        options={[
          actionOptions.active,
          actionOptions.inactive,
          actionOptions.delete,
        ]}
        endpoint={`/${pathAdmin}/category/change-multi`}
        checkAll={checkAll}
        checkItems={checkItems}
      />
      <table className="text-travel-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-travel-four border-b py-[15px] pl-6">
              <CustomCheckbox checked={checkAll} setChecked={handleCheckAll} />
            </th>
            <th className="border-travel-four border-b p-[15px] text-left text-sm font-extrabold">
              Tên danh mục
            </th>
            <th className="border-travel-four border-b p-[15px] text-center text-sm font-extrabold">
              Ảnh đại diện
            </th>
            <th className="border-travel-four border-b p-[15px] text-center text-sm font-extrabold">
              Vị trí
            </th>
            <th className="border-travel-four border-b p-[15px] text-center text-sm font-extrabold">
              Trạng thái
            </th>
            <th className="border-travel-four border-b p-[15px] text-left text-sm font-extrabold">
              Tạo bởi
            </th>
            <th className="border-travel-four border-b p-[15px] text-left text-sm font-extrabold">
              Cập nhật bởi
            </th>
            <th className="border-travel-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 ? (
            <>
              {categoryList.map((item: CategoryItem) => (
                <tr key={item.id} className="last:[&>td]:border-0">
                  <td className="border-travel-four border-b py-[8px] pl-6">
                    <CustomCheckbox
                      checked={checkItems.includes(item.id)}
                      setChecked={(checked: boolean) =>
                        handleCheckItem(item.id, checked)
                      }
                    />
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-[8px] text-left text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                    <img
                      src={
                        item.avatar ||
                        "https://placehold.co/60x60/white/black?text=No+Image"
                      }
                      className="border-travel-four mx-auto h-[60px] w-[60px] rounded-md border object-cover"
                    />
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                    {item.position}
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-[8px] text-center text-sm font-semibold">
                    {item.status === "active" ? (
                      <Badge className="badge-green" content="Hoạt động" />
                    ) : (
                      <Badge className="badge-red" content="Tạm dừng" />
                    )}
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-2 text-left text-sm font-semibold">
                    <div>{item.createdByFullName}</div>
                    <div>
                      {dayjs(item.createdAt).format("HH:mm - DD/MM/YYYY")}
                    </div>
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-2 text-left text-sm font-semibold">
                    <div>{item.updatedByFullName}</div>
                    <div>
                      {dayjs(item.updatedAt).format("HH:mm - DD/MM/YYYY")}
                    </div>
                  </td>
                  <td className="border-travel-four border-b px-[15px] py-2 text-left text-sm font-semibold">
                    <div className="border-travel-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
                      <ButtonEdit
                        to={`/${pathAdmin}/category/edit/${item.id}`}
                      />
                      <ButtonDelete
                        id={item.id}
                        isPending={isPending}
                        onDelete={(id) => mutate(id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <EmptyTableRow colSpan={8} />
          )}
        </tbody>
      </table>
    </div>
  );
};
