import { resetPasswordSchema, type ResetPasswordInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { PasswordInput } from "../inputs/PasswordInput";
import { ButtonSubmit } from "../buttons/ButtonSubmit";

export const FormResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleResetPasswordForm: SubmitHandler<ResetPasswordInputs> = (
    data,
  ) => {
    const dataFinal = {
      password: data.password,
    };
    console.log(dataFinal);
  };

  return (
    <form
      onSubmit={handleSubmit(handleResetPasswordForm)}
      className="flex flex-col gap-[30px]"
    >
      <PasswordInput
        id="password"
        label="Mật khẩu"
        register={register("password")}
        error={errors.password}
      />

      <PasswordInput
        id="confirmPassword"
        label="Xác nhận mật khẩu"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <ButtonSubmit label="Thay đổi" />
    </form>
  );
};
