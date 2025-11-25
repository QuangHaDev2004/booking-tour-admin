export const NoPermission = () => {
  return (
    <>
      <div className="mx-auto w-[80%] sm:w-[500px]">
        <div className="aspect-[480/457] overflow-hidden">
          <img
            src="/assets/images/img-empty.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-center font-bold text-3xl">Không có quyền truy cập</h1>
      </div>
    </>
  );
};
