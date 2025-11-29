import type { OrderDetail } from "@/types/order";

export const OrderSummary = ({ orderDetail }: { orderDetail: OrderDetail }) => {
  return (
    <div>
      <label className="text-label mb-[10px] block text-sm font-semibold">
        Thanh toán
      </label>
      {orderDetail && (
        <div className="text-travel-secondary flex flex-col gap-[3px] text-sm font-semibold">
          <div>Tạm tính: {orderDetail?.subTotal?.toLocaleString("vi-VN")}đ</div>
          <div>Giảm: {orderDetail?.discount?.toLocaleString("vi-VN")}đ</div>
          {/* <div>Mã giảm: TOURMUAHE2024</div> */}
          <div>
            <span>Tổng tiền: </span>
            <span className="font-bold text-[#EF3826]">
              {orderDetail?.total?.toLocaleString("vi-VN")}đ
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
