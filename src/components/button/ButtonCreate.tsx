import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

export const ButtonCreate = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold text-white transition-all duration-300"
    >
      <FaPlus className="text-sm" />
      <span>Tạo mới</span>
    </Link>
  );
};
