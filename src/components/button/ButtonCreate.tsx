import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";

export const ButtonCreate = ({
  to,
  text = "Tạo mới",
}: {
  to: string;
  text?: string;
}) => {
  return (
    <Link
      to={to}
      className="border-travel-primary text-travel-primary flex items-center gap-2 rounded-sm border px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:bg-travel-primary/10 shadow-md bg-white"
    >
      <FaPlus className="text-sm" />
      <span>{text}</span>
    </Link>
  );
};
