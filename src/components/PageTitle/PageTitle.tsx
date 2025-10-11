export const PageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-secondary mb-5 text-[32px] font-bold">
        {title}
      </h1>
    </>
  );
};
