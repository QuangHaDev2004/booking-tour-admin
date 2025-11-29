import type { OrderDetail } from "@/types/order";

export const OrderTourList = ({
  orderDetail,
}: {
  orderDetail: OrderDetail;
}) => {
  return (
    <div>
      <label className="text-travel-label mb-[10px] block text-sm font-semibold">
        Danh sách tour
      </label>
      {orderDetail?.items && orderDetail?.items.length > 0 && (
        <div className="flex flex-col gap-4">
          {orderDetail.items.map((item) => (
            <div key={item.tourId} className="flex gap-3">
              <div className="h-[115px] w-[115px] overflow-hidden rounded-md">
                <img src={item.avatar} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-[3px] flex-1">
                <div className="text-travel-secondary/80 text-sm font-semibold">
                  {item.name}
                </div>
                <div className="text-travel-secondary/80 text-xs font-semibold">
                  Người lớn: {item.quantityAdult} x{" "}
                  {item.priceNewAdult.toLocaleString("vi-VN")}đ
                </div>
                <div className="text-travel-secondary/80 text-xs font-semibold">
                  Trẻ em: {item.quantityChildren} x{" "}
                  {item.priceNewChildren.toLocaleString("vi-VN")}đ
                </div>
                <div className="text-travel-secondary/80 text-xs font-semibold">
                  Em bé: {item.quantityBaby} x{" "}
                  {item.priceNewBaby.toLocaleString("vi-VN")}đ
                </div>
                <div className="text-travel-secondary/80 text-xs font-semibold">
                  Ngày khởi hành: {item.departureDateFormat}
                </div>
                <div className="text-travel-secondary/80 text-xs font-semibold">
                  Khởi hành tại: {item.locationsFromName}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
