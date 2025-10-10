import { PageTitle } from "@/components/pageTitle/PageTitle";
import { StatCard } from "./StatCard";
import { RevenueChart } from "./RevenueChart";
import { DashBoardTable } from "./DashBoardTable";

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
      <PageTitle title="Tổng quan" />

      <div className="mb-[30px] grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
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

      <div
        className="rounded-[14px] bg-white p-6 sm:p-8"
        style={{
          boxShadow: "6px 6px 54px 0px #0000000D",
        }}
      >
        <h2 className="text-secondary mb-[30px] text-2xl font-bold">
          Đơn hàng mới
        </h2>
        <div className="srcoll-table overflow-x-auto">
          <DashBoardTable />
        </div>
      </div>
    </>
  );
};
