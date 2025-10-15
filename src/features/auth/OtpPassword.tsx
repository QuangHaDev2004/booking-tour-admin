import { pathAdmin } from "@/config/path";
import { AuthBottomLink } from "./components/AuthBottomLink";
import { AuthDescription } from "./components/AuthDescription";
import { AuthTitle } from "./components/AuthTitle";
import { FormOtpPassword } from "./components/forms/FormOtpPassword";

export const OtpPassword = () => {
  return (
    <>
      <AuthTitle title="Nhập mã OTP" />
      <AuthDescription text="Vui lòng nhập mã OTP để tiếp tục" />
      <FormOtpPassword />
      <AuthBottomLink
        text="Bạn đã nhớ mật khẩu?"
        to={`/${pathAdmin}/account/login`}
        textTo="Đăng nhập"
      />
    </>
  );
};
