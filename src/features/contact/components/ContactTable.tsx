import { ButtonCopy } from "@/components/button/ButtonCopy";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { Search } from "@/components/common/Search";
import { EmptyTableRow } from "@/components/table/EmptyTableRow";
import { pathAdmin } from "@/config/path";
import { useContactList } from "../hooks/useContactList";

export const ContactTable = () => {
  const { contactList } = useContactList();

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
        <Search placeholder="Nhập email..." />
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
                Email
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Ngày tạo
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {contactList.length > 0 ? (
              contactList.map((item) => (
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
                    {item.email}
                  </td>
                  <td className="border-travel-four border-b px-4 py-2 text-left text-sm font-semibold">
                    {item.createdAtFormat}
                  </td>
                  <td className="border-travel-four border-b px-4 py-2 text-left text-sm font-semibold">
                    <div className="border-travel-four inline-flex items-center rounded-lg border bg-[#FAFBFD]">
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
    </>
  );
};
