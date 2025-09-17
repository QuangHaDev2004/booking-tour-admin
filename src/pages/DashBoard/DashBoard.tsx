import { BoxTitle } from "../../components/BoxTitle/BoxTitle";
import { RevenueChart } from "./RevenueChart";

import { StatCard } from "./StatCard";

const stats = [
  {
    id: 1,
    icon: "/assets/images/Icon-user.svg",
    label: "Người dùng",
    value: "1.200",
  },
  {
    id: 2,
    icon: "/assets/images/Icon-order.svg",
    label: "Đơn hàng",
    value: "3.600",
  },
  {
    id: 3,
    icon: "/assets/images/Icon-chart.svg",
    label: "Doanh thu",
    value: "300.000.000đ",
  },
];

export const DashBoard = () => {
  return (
    <>
      <BoxTitle title="Tổng quan" />

      <div className="mb-[30px] grid grid-cols-3 gap-[30px]">
        {stats.map((item) => (
          <StatCard
            key={item.id}
            icon={item.icon}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      <RevenueChart />
    </>
  );
};
