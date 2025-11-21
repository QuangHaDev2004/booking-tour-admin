export const Badge = ({
  className,
  content,
}: {
  className: string;
  content: string;
}) => {
  return (
    <div
      className={`inline-block rounded-[4.5px] px-5 py-1.5 text-xs font-bold ${className}`}
    >
      {content}
    </div>
  );
};
