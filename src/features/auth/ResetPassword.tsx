import { pathAdmin } from "@/config/path";
import { AuthBottomLink } from "./components/AuthBottomLink";
import { AuthDescription } from "./components/AuthDescription";
import { AuthTitle } from "./components/AuthTitle";
import { FormResetPassword } from "./components/form/FormResetPassword";

export const ResetPassword = () => {
  return (
    <>
      <AuthTitle title="Đổi mật khẩu" />
      <AuthDescription text="Vui lòng nhập mật khẩu để tiếp tục" />
      <FormResetPassword />
      <AuthBottomLink
        text="Bạn đã nhớ mật khẩu?"
        to={`/${pathAdmin}/account/login`}
        textTo="Đăng nhập"
      />
    </>
  );
};
