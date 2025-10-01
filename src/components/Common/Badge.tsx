export const Badge = ({
  className,
  content,
}: {
  className: string;
  content: string;
}) => {
  return <div className={className}>{content}</div>;
};
