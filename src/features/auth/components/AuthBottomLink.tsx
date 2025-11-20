import { Link } from "react-router";

export const AuthBottomLink = ({
  text,
  to,
  textTo,
}: {
  text: string;
  to: string;
  textTo: string;
}) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-2.5 text-lg">
      <span className="text-travel-secondary/65 font-semibold">{text}</span>
      <Link to={to} className="text-travel-primary font-bold underline">
        {textTo}
      </Link>
    </div>
  );
};
