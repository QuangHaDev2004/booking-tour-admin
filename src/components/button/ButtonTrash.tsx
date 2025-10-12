import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router";

export const ButtonTrash = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="bg-error hover:bg-error/90 flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold text-white transition-all duration-300"
    >
      <FaRegTrashCan className="text-sm" />
      <span>Thùng rác</span>
    </Link>
  );
};
