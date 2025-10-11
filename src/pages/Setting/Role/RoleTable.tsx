import { Link } from "react-router";
import { CustomCheckbox } from "../../../components/checkbox/Checkbox";
import { pathAdmin } from "../../../config/path";
import { FaPenToSquare } from "react-icons/fa6";
import { ButtonDelete } from "../../../components/button/ButtonDelete";

export const RoleTable = () => {
  return (
    <div className="srcoll-table mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border border-[#D5D5D5] bg-white">
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-b border-[#D5D5D5] py-[15px] pl-[32px]">
              <CustomCheckbox />
            </th>
            <th className="border-b border-[#D5D5D5] p-[15px] text-left text-sm font-extrabold">
              Tên nhóm quyền
            </th>
            <th className="border-b border-[#D5D5D5] p-[15px] text-left text-sm font-extrabold">
              Mô tả ngắn
            </th>
            <th className="border-b border-[#D5D5D5] p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-[#D5D5D5] py-[8px] pl-[32px]">
              <CustomCheckbox />
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              Quản trị viên
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              <div>Có đầy đủ các quyền</div>
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              <div className="inline-flex items-center rounded-lg border border-[#D5D5D5] bg-[#FAFBFD]">
                <Link
                  to={`/${pathAdmin}/setting/role/edit`}
                  className="border-r border-[#D5D5D5] px-[16.5px] py-[10px]"
                >
                  <FaPenToSquare className="text-[15px] text-black/60" />
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
