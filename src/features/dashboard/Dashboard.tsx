import { PageTitle } from "@/components/pageTitle/PageTitle";
import { StatCard } from "./components/StatCard";
import { RevenueChart } from "./components/RevenueChart";
import { DashboardTable } from "./components/DashboardTable";
import { dashboardStats } from "./constants/dashboardStats";
import { useAuthStore } from "@/stores/useAuthStore";
import { NoPermission } from "@/components/common/NoPermission";

export const Dashboard = () => {
  const { account } = useAuthStore();
  const permissions = account?.permissions;

  return (
    <>
      {permissions?.includes("dashboard-view") ? (
        <>
          <PageTitle title="Tổng quan" />

          <div className="mb-[30px] grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {dashboardStats.map((item) => (
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
              <DashboardTable />
            </div>
          </div>
        </>
      ) : (
        <NoPermission />
      )}
    </>
  );
};
