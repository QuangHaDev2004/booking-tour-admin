export const OrderSummary = () => {
  return (
    <div>
      <label className="text-label mb-[10px] block text-sm font-semibold">
        Thanh toán
      </label>
      <div className="text-secondary flex flex-col gap-[3px] text-sm font-semibold">
        <div className="">Tổng tiền: 10.000.000đ</div>
        <div className="">Giảm: 400.000đ</div>
        <div className="">Mã giảm: TOURMUAHE2024</div>
        <div className="">
          <span>Thanh toán: </span>
          <span className="font-bold text-[#EF3826]">9.600.000đ</span>
        </div>
      </div>
    </div>
  );
};
