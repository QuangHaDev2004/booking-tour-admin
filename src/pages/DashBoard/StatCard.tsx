type StatCardProps = {
  icon: string;
  label: string;
  value: string;
};

export const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 rounded-[14px] bg-white py-7">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-[23px]">
          <img src={icon} className="h-full w-full object-cover" />
        </div>
        <div className="text-secondary flex flex-col gap-1">
          <span className="text-[16px] font-semibold">{label}</span>
          <span className="text-[28px] font-bold">{value}</span>
        </div>
      </div>
    </>
  );
};
