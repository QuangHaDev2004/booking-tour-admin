import type { ReactNode } from "react";
import { FaFilter } from "react-icons/fa6";

export const FilterBar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-secondary border-four mb-[15px] inline-flex flex-wrap items-center overflow-hidden rounded-lg border bg-white text-sm font-bold">
      <div className="border-four flex items-center gap-3 border-r p-4">
        <FaFilter className="text-lg" />
        Bộ lọc
      </div>

      {children}
    </div>
  );
};
