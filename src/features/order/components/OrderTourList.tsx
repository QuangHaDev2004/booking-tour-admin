export const OrderTourList = () => {
  return (
    <div>
      <label className="text-label mb-[10px] block text-sm font-semibold">
        Danh sách tour
      </label>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="h-[115px] w-[115px] overflow-hidden rounded-md">
            <img
              src="/assets/images/ha-long.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <div className="text-secondary/80 text-sm font-semibold">
              Tour Hạ Long
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Người lớn: 3 x 1.500.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Trẻ em: 2 x 1.300.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Em bé: 2 x 1.000.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Ngày khởi hành: 20/10/2024
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Khởi hành tại: Hà Nội
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-[115px] w-[115px] overflow-hidden rounded-md">
            <img
              src="/assets/images/ha-long.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[3px]">
            <div className="text-secondary/80 text-sm font-semibold">
              Tour Hạ Long
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Người lớn: 3 x 1.500.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Trẻ em: 2 x 1.300.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Em bé: 2 x 1.000.000đ
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Ngày khởi hành: 20/10/2024
            </div>
            <div className="text-secondary/80 text-xs font-semibold">
              Khởi hành tại: Hà Nội
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
