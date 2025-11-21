import { Link } from "react-router";

export const ContextLink = ({ text, to }: { text: string; to: string }) => {
  return (
    <Link
      to={to}
      className="text-travel-primary mt-[30px] flex justify-center text-[18px] font-bold underline"
    >
      {text}
    </Link>
  );
};
