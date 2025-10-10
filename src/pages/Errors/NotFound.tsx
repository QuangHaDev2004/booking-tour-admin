import { Link } from "react-router";
import { pathAdmin } from "../../config/path";

export const NotFound = () => {
  return (
    <div className="px-[30px] py-[90px]">
      <img
        className="mx-auto mb-10 h-auto w-[60%] md:w-[400px]"
        src="/assets/images/404.jpg"
      />
      <h1 className="text-secondary mb-[30px] text-center text-2xl font-bold md:text-[32px]">
        Trang này không tồn tại...
      </h1>
      <div className="text-center">
        <Link
          to={`/${pathAdmin}/dashboard`}
          className="bg-primary/90 inline-block rounded-lg px-10 py-[15px] text-[16px] font-bold text-white md:px-[104px] md:text-[20px]"
        >
          Trở về trang tổng quan
        </Link>
      </div>
    </div>
  );
};
