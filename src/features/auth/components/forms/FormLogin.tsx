import { loginSchema, type LoginInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../inputs/TextInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { RememberPasswordField } from "../RememberPasswordField";
import { ButtonSubmit } from "../buttons/ButtonSubmit";

export const FormLogin = () => {
  const [rememberPassword, setRememberPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const handleCheckboxChange = (checked: boolean) => {
    setRememberPassword(checked);
  };

  const handleLoginForm: SubmitHandler<LoginInputs> = (data) => {
    const dataFinal = {
      ...data,
      rememberPassword,
    };
    console.log(dataFinal);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginForm)}
      className="flex flex-col gap-[30px]"
    >
      <TextInput
        id="email"
        label="Email"
        register={register("email")}
        error={errors.email}
      />

      <PasswordInput
        id="password"
        label="Mật khẩu"
        register={register("password")}
        error={errors.password}
      />

      <RememberPasswordField
        checked={rememberPassword}
        handleCheckboxChange={handleCheckboxChange}
      />

      <ButtonSubmit label="Đăng nhập" />
    </form>
  );
};
