import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Biểu đồ doanh thu theo tháng",
    },
  },
};

const data = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
  datasets: [
    {
      label: "Doanh thu (VNĐ)",
      data: [12000000, 19000000, 30000000, 25000000, 40000000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Chi phí (VNĐ)",
      data: [8000000, 12000000, 20000000, 18000000, 26000000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const RevenueChart = () => {
  return (
    <>
      <div
        className="mb-[30px] rounded-[14px] bg-white p-6 sm:p-8"
        style={{
          boxShadow: "6px 6px 54px 0px #0000000D",
        }}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-2.5">
          <h1 className="text-secondary text-2xl font-bold">Biểu đồ doanh thu</h1>
          <input type="month" />
        </div>
        <div className="h-[350px]">
          <Line options={options} data={data} className="!h-full !w-full" />
        </div>
      </div>
    </>
  );
};
