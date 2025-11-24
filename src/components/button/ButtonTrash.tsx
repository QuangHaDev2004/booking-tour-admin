import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router";

export const ButtonTrash = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="border-travel-red text-travel-red hover:bg-travel-red/10 flex items-center gap-2 rounded-sm border bg-white px-6 py-2.5 text-sm font-bold shadow-md transition-all duration-300"
    >
      <FaRegTrashCan className="text-sm" />
      <span>Thùng rác</span>
    </Link>
  );
};
