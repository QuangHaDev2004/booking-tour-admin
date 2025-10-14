import { pathAdmin } from "@/config/path";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";

export const OrderTable = () => {
  return (
    <div className="srcoll-table border-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white">
      <table className="text-secondary w-full min-w-[1141px] border-collapse">
        <thead>
          <tr>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Mã
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Thông tin khách
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Danh sách tour
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Thanh toán
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Trạng thái
            </th>
            <th className="border-four border-b p-[15px] text-center text-sm font-extrabold">
              Ngày đặt
            </th>
            <th className="border-four border-b p-[15px] text-left text-sm font-extrabold">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-primary border-four border-b px-[15px] py-[8px] text-sm font-bold">
              OD000001
            </td>
            <td className="text-secondary border-four border-b px-[15px] py-[8px] text-sm font-semibold">
              <div>Họ tên: Lê Văn A</div>
              <div>SĐT: 0123456789</div>
              <div>Ghi chú: Test...</div>
            </td>
            <td className="text-secondary border-four border-b px-[15px] py-[8px] text-sm font-semibold">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="h-[76px] w-[76px] overflow-hidden rounded-md">
                    <img
                      src="/assets/images/ha-long.jpg"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="mb-[3px] text-sm font-semibold">
                      Tour Hạ Long
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div className="text-[12px] font-semibold">
                        Người lớn: 3 x 1.500.000đ
                      </div>
                      <div className="text-[12px] font-semibold">
                        Trẻ em: 2 x 1.300.000đ
                      </div>
                      <div className="text-[12px] font-semibold">
                        Em bé: 2 x 1.000.000đ
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-[76px] w-[76px] overflow-hidden rounded-md">
                    <img
                      src="/assets/images/ha-long.jpg"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="mb-[3px] text-sm font-semibold">
                      Tour Hạ Long
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <div className="text-[12px] font-semibold">
                        Người lớn: 3 x 1.500.000đ
                      </div>
                      <div className="text-[12px] font-semibold">
                        Trẻ em: 2 x 1.300.000đ
                      </div>
                      <div className="text-[12px] font-semibold">
                        Em bé: 2 x 1.000.000đ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="text-secondary border-four border-b px-[15px] py-[8px] text-sm font-semibold">
              <div>Tổng tiền: 10.000.000đ</div>
              <div>Giảm: 400.000đ</div>
              <div>Mã giảm: TOURMUAHE2024</div>
              <div>Thanh toán: 9.600.000đ</div>
              <div>PTTT: Ví Momo</div>
              <div>TTTT: Đã thanh toán</div>
            </td>
            <td className="border-b border-[rgba(151,151,151,0.4)] px-[15px] py-[8px]">
              <div className="rounded-[4.5px] bg-[rgba(255,168,86,0.2)] px-6 py-1.5 text-center text-[12px] font-bold text-[#FFA756]">
                Khởi tạo
              </div>
            </td>
            <td className="text-secondary border-b border-[rgba(151,151,151,0.4)] px-[15px] py-[8px] text-center text-sm font-semibold">
              <div>16:20</div>
              <div>01/01/2024</div>
            </td>
            <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
              <div className="inline-flex items-center rounded-lg border border-[#D5D5D5] bg-[#FAFBFD]">
                <ButtonEdit to={`/${pathAdmin}/order/edit`} />
                <ButtonDelete endpoint={`/${pathAdmin}/order/delete`} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
