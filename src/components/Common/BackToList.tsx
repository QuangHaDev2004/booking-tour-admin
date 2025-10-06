import { Link } from "react-router";

export const BackToList = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="text-primary mt-[30px] flex justify-center text-[18px] font-bold underline"
    >
      Quay lại danh sách
    </Link>
  );
};
