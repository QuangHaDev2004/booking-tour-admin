import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router";

export const ButtonEdit = ({ to }: { to: string }) => {
  return (
    <Link to={to} className="border-four border-r px-[16.5px] py-[10px]">
      <FaPenToSquare className="text-[15px] text-black/60" />
    </Link>
  );
};
