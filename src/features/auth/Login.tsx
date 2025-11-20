import { pathAdmin } from "@/config/path";
import { AuthBottomLink } from "./components/AuthBottomLink";
import { AuthDescription } from "./components/AuthDescription";
import { AuthTitle } from "./components/AuthTitle";
import { FormLogin } from "./components/form/FormLogin";

export const Login = () => {
  return (
    <>
      <AuthTitle title="Đăng nhập" />
      <AuthDescription text="Vui lòng nhập email và mật khẩu để tiếp tục" />
      <FormLogin />
      <AuthBottomLink
        text="Bạn chưa có tài khoản?"
        to={`/${pathAdmin}/account/register`}
        textTo="Tạo tài khoản"
      />
    </>
  );
};
