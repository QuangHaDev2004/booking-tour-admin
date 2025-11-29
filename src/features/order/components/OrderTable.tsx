import { pathAdmin } from "@/config/path";
import { ButtonDelete } from "@/components/button/ButtonDelete";
import { ButtonEdit } from "@/components/button/ButtonEdit";
import { Search } from "@/components/common/Search";
import { useOrderList } from "../hooks/useOrderList";
import type { OrderItem } from "@/types/order";
import { orderStatusList } from "@/constants/order";

export const OrderTable = () => {
  const { data } = useOrderList();
  const orderList: OrderItem[] = data?.orderList ?? [];

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-4">
        <Search placeholder="Nhập mã đơn hàng..." />
      </div>

      <div className="srcoll-table border-travel-four mb-[15px] overflow-hidden overflow-x-auto rounded-[14px] border bg-white shadow-md">
        <table className="text-travel-secondary w-full min-w-[1141px] border-collapse">
          <thead>
            <tr>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Mã
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Thông tin khách
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Danh sách tour
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Thanh toán
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Trạng thái
              </th>
              <th className="border-travel-four border-b p-4 text-center text-sm font-extrabold">
                Ngày đặt
              </th>
              <th className="border-travel-four border-b p-4 text-left text-sm font-extrabold">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList && orderList.length > 0 ? (
              orderList.map((orderDetail) => {
                const status = orderStatusList.find(
                  (item) => item.value === orderDetail.statusInfo.value,
                );

                return (
                  <tr key={orderDetail.id}>
                    <td className="text-primary border-travel-four border-b px-4 py-2 text-sm font-bold">
                      {orderDetail.orderCode}
                    </td>
                    <td className="text-travel-secondary border-travel-four border-b px-4 py-2 text-sm font-semibold">
                      <div>Họ tên: {orderDetail.fullName}</div>
                      <div>SĐT: {orderDetail.phone}</div>
                      <div>Ghi chú: {orderDetail.note || "Không có"}</div>
                    </td>
                    <td className="text-travel-secondary border-travel-four border-b px-4 py-2 text-sm font-semibold">
                      <div className="flex flex-col gap-2.5">
                        {orderDetail.items.map((item) => (
                          <div
                            key={item.tourId}
                            className="flex items-start gap-2.5"
                          >
                            <div className="h-[76px] w-[76px] overflow-hidden rounded-md">
                              <img
                                src={
                                  item.avatar ||
                                  "https://placehold.co/1x1/white/black?text=No+Image"
                                }
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="w-40 flex-1">
                              <div className="mb-[3px] text-sm font-semibold">
                                {item.name}
                              </div>
                              <div className="flex flex-col gap-[3px]">
                                <div className="text-[12px] font-semibold">
                                  Người lớn: {item.quantityAdult} x{" "}
                                  {item.priceNewAdult.toLocaleString("vi-VN")}đ
                                </div>
                                <div className="text-[12px] font-semibold">
                                  Trẻ em: {item.quantityChildren} x{" "}
                                  {item.priceNewChildren.toLocaleString(
                                    "vi-VN",
                                  )}
                                  đ
                                </div>
                                <div className="text-[12px] font-semibold">
                                  Em bé: {item.quantityBaby} x{" "}
                                  {item.priceNewBaby.toLocaleString("vi-VN")}đ
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="text-travel-secondary border-travel-four border-b px-4 py-2 text-sm font-semibold">
                      <div>
                        Tạm tính: {orderDetail.subTotal.toLocaleString("vi-VN")}
                        đ
                      </div>
                      <div>
                        Giảm: {orderDetail.discount.toLocaleString("vi-VN")}đ
                      </div>
                      {/* <div>Mã giảm: TOURMUAHE2024</div> */}
                      <div>
                        Tổng tiền: {orderDetail.total.toLocaleString("vi-VN")}đ
                      </div>
                      <div>PTTT: {orderDetail.paymentMethodName}</div>
                      <div>TTTT: {orderDetail.paymentStatusName}</div>
                    </td>
                    <td className="border-b border-[rgba(151,151,151,0.4)] px-[15px] py-[8px]">
                      <div
                        className="flex h-[27px] w-[93px] items-center justify-center rounded-[4.5px] text-xs font-bold"
                        style={{
                          color: status?.color,
                          backgroundColor: status?.colorBg,
                        }}
                      >
                        {status?.label}
                      </div>
                    </td>
                    <td className="text-travel-secondary border-b border-[rgba(151,151,151,0.4)] px-[15px] py-[8px] text-center text-sm font-semibold">
                      <div>{orderDetail.createdAtTime}</div>
                      <div>{orderDetail.createdAtDate}</div>
                    </td>
                    <td className="border-b border-[#D5D5D5] px-[15px] py-[8px] text-left text-sm font-semibold">
                      <div className="inline-flex items-center rounded-lg border border-[#D5D5D5] bg-[#FAFBFD]">
                        <ButtonEdit
                          to={`/${pathAdmin}/order/edit/${orderDetail.id}`}
                        />
                        <ButtonDelete endpoint={`/${pathAdmin}/order/delete`} />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Không có dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
