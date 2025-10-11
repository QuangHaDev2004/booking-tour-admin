import { FaRegClipboard } from "react-icons/fa6";
import { CustomCheckbox } from "../../components/checkbox/Checkbox";
import { ButtonDelete } from "../../components/button/ButtonDelete";

export const ContactTable = () => {
  return (
    <div className="srcoll-table mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border border-[#D5D5D5] bg-white">
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-b border-[#D5D5D5] py-[15px] pl-[32px]">
              <CustomCheckbox />
            </th>
            <th className="border-b border-[#D5D5D5] p-[15px] text-left text-sm font-extrabold">
              Email
            </th>
            <th className="border-b border-[#D5D5D5] p-[15px] text-left text-sm font-extrabold">
              Ngày tạo
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
              <div>16:40 - 12/12/2024</div>
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              Số 123, đường ABC,...
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              <div className="inline-flex items-center rounded-lg border border-[#D5D5D5] bg-[#FAFBFD]">
                <button className="cursor-pointer border-r border-[#D5D5D5] px-[16.5px] py-[10px]">
                  <FaRegClipboard className="text-[15px]" />
                </button>
                <ButtonDelete />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
