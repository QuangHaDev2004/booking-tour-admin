export const FilterDateRange = () => {
  return (
    <div className="flex items-center gap-3 border-r border-[#D5D5D5] p-4 lg:p-6">
      <input type="date" className="w-28" />
      <span>-</span>
      <input type="date" className="w-28" />
    </div>
  );
};
