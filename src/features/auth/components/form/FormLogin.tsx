import { loginSchema, type LoginInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../input/TextInput";
import { PasswordInput } from "../input/PasswordInput";
import { ButtonSubmit } from "../button/ButtonSubmit";
import { pathAdmin } from "@/config/path";
import { Link } from "react-router";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const handleLoginForm: SubmitHandler<LoginInputs> = (data) => {
    const dataFinal = {
      email: data.email,
      password: data.password,
      rememberPassword: data.rememberPassword,
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

      <div className="text-travel-secondary/60 flex flex-wrap justify-between gap-4 text-lg font-semibold">
        <label className="label flex items-center gap-4">
          <input
            type="checkbox"
            {...register("rememberPassword")}
            className="checkbox checkbox-primary"
          />
          Nhớ mật khẩu
        </label>
        <Link
          to={`/${pathAdmin}/account/forgot-password`}
          className="hover:text-travel-primary transition-all duration-300"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <ButtonSubmit label="Đăng nhập" />
    </form>
  );
};
