import { pathAdmin } from "@/config/path";
import { AuthBottomLink } from "./components/AuthBottomLink";
import { AuthDescription } from "./components/AuthDescription";
import { AuthTitle } from "./components/AuthTitle";
import { FormRegister } from "./components/form/FormRegister";

export const Register = () => {
  return (
    <>
      <AuthTitle title="Đăng ký" />
      <AuthDescription text="Tạo một tài khoản để tiếp tục" />
      <FormRegister />
      <AuthBottomLink
        text="Bạn đã có tài khoản?"
        to={`/${pathAdmin}/account/login`}
        textTo="Đăng nhập"
      />
    </>
  );
};
