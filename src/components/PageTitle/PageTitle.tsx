export const PageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-travel-secondary mb-5 text-2xl font-bold">
        {title}
      </h1>
    </>
  );
};
