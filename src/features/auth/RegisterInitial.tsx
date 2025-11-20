import { pathAdmin } from "@/config/path";
import { AuthBottomLink } from "./components/AuthBottomLink";
import { AuthDescription } from "./components/AuthDescription";
import { AuthTitle } from "./components/AuthTitle";
import { FaRegCheckCircle } from "react-icons/fa";

export const RegisterInitial = () => {
  return (
    <>
      <FaRegCheckCircle className="text-green-500 size-20 mx-auto mb-4" />
      <AuthTitle title="Tài khoản đã được khởi tạo" />
      <AuthDescription text="Vui lòng chờ phê duyệt của quản trị viên" />
      <AuthBottomLink
        text="Đã được phê duyệt?"
        to={`/${pathAdmin}/account/login`}
        textTo="Đăng nhập"
      />
    </>
  );
};
