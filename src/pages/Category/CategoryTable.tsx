import { Link } from "react-router";
import { CustomCheckbox } from "../../components/common/Checkbox";
import { Badge } from "../../components/common/Badge";
import { FaPenToSquare } from "react-icons/fa6";
import { ButtonDelete } from "../../components/common/ButtonDelete";
import { pathAdmin } from "../../config/path";

export const CategoryTable = () => {
  return (
    <div className="srcoll-table mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border border-four bg-white">
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-b border-four py-[15px] pl-[32px]">
              <CustomCheckbox />
            </th>
            <th className="border-b border-four p-[15px] text-left text-sm font-extrabold">
              Tên danh mục
            </th>
            <th className="border-b border-four p-[15px] text-center text-sm font-extrabold">
              Ảnh đại diện
            </th>
            <th className="border-b border-four p-[15px] text-center text-sm font-extrabold">
              Vị trí
            </th>
            <th className="border-b border-four p-[15px] text-center text-sm font-extrabold">
              Trạng thái
            </th>
            <th className="border-b border-four p-[15px] text-left text-sm font-extrabold">
              Tạo bởi
            </th>
            <th className="border-b border-four p-[15px] text-left text-sm font-extrabold">
              Cập nhật bởi
            </th>
            <th className="border-b border-four p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-four py-[8px] pl-[32px]">
              <CustomCheckbox />
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-left text-sm font-semibold">
              Danh mục 1
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-center text-sm font-semibold">
              <img
                src="/assets/images/ha-long.jpg"
                className="mx-auto h-[60px] w-[60px] rounded-md object-cover"
              />
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-center text-sm font-semibold">
              1
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-center text-sm font-semibold">
              <Badge
                className="inline-block rounded-[4.5px] bg-[rgba(0,182,155,0.2)] px-[16px] py-[6px] text-xs font-bold text-[#00B69B]"
                content="Hoạt động"
              />
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-left text-sm font-semibold">
              <div>Lê Văn A</div>
              <div>16:30 - 20/10/2024</div>
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-left text-sm font-semibold">
              <div>Lê Văn A</div>
              <div>16:30 - 20/10/2024</div>
            </td>
            <td className="border-b border-four px-[15px] py-[8px] text-left text-sm font-semibold">
              <div className="inline-flex items-center rounded-lg border border-four bg-[#FAFBFD]">
                <Link
                  to={`/${pathAdmin}/category/edit`}
                  className="border-r border-four px-[16.5px] py-[10px]"
                >
                  <FaPenToSquare className="text-[15px]" />
                </Link>
                <ButtonDelete />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
