import { Outlet } from "react-router";

export const AccountLayout = () => {
  return (
    <div className="min-h-screen bg-[url(/assets/images/bg-account.jpg)] bg-cover bg-center bg-no-repeat py-[50px]">
      <div className="border-four mx-auto w-[95%] rounded-3xl border bg-white px-5 py-10 md:w-[630px] md:px-[57px] md:py-16">
        <Outlet />
      </div>
    </div>
  );
};
