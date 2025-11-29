/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRotateLeft, FaSliders } from "react-icons/fa6";
import { useSearchParams } from "react-router";

export const OrderFilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderStatus = searchParams.get("orderStatus") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const paymentMethod = searchParams.get("paymentMethod") || "";
  const paymentStatus = searchParams.get("paymentStatus") || "";

  const handleOrderFilter = (key: string, event: any) => {
    const params = new URLSearchParams(searchParams);
    const value = event.target.value;
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="text-travel-secondary flex items-center gap-3 text-lg font-semibold italic">
          <FaSliders className="size-5" /> Bộ lọc
        </div>

        <select
          value={orderStatus}
          onChange={(event) => handleOrderFilter("orderStatus", event)}
          className="select border-travel-secondary/20 text-travel-secondary h-10 w-48 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
        >
          <option value="">Trạng thái đơn hàng</option>
          <option value="initial">Khởi tạo</option>
          <option value="done">Hoàn thành</option>
          <option value="cancel">Đã hủy</option>
        </select>

        <div className="border-travel-secondary/20 text-travel-secondary flex h-10 items-center gap-4 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md">
          <input
            type="date"
            className="w-28"
            value={startDate}
            onChange={(event) => handleOrderFilter("startDate", event)}
          />
          <span>-</span>
          <input
            type="date"
            className="w-28"
            value={endDate}
            onChange={(event) => handleOrderFilter("endDate", event)}
          />
        </div>

        <select
          value={paymentMethod}
          onChange={(event) => handleOrderFilter("paymentMethod", event)}
          className="select border-travel-secondary/20 text-travel-secondary h-10 w-52 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
        >
          <option value="">Phương thức thanh toán</option>
          <option value="money">Tiền mặt</option>
          <option value="bank">Chuyển khoản</option>
          <option value="vnpay">VNPay</option>
          <option value="zalopay">ZaloPay</option>
        </select>

        <select
          value={paymentStatus}
          onChange={(event) => handleOrderFilter("paymentStatus", event)}
          className="select border-travel-secondary/20 text-travel-secondary h-10 w-48 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
        >
          <option value="">Trạng thái thanh toán</option>
          <option value="paid">Đã thanh toán</option>
          <option value="unpaid">Chưa thanh toán</option>
        </select>

        <button
          onClick={handleReset}
          className="text-travel-red border-travel-red flex h-10 cursor-pointer items-center gap-3 rounded-4xl border bg-white px-4 text-sm font-semibold shadow-md"
        >
          <FaRotateLeft className="size-4" />
          Xóa bộ lọc
        </button>
      </div>
    </>
  );
};
