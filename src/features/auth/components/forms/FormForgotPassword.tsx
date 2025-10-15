import { forgotPasswordSchema, type ForgotPasswordInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../inputs/TextInput";
import { ButtonSubmit } from "../buttons/ButtonSubmit";

export const FormForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const handleForgotPasswordForm: SubmitHandler<ForgotPasswordInputs> = (data) => {
    const dataFinal = {
      ...data,
    };
    console.log(dataFinal);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForgotPasswordForm)}
      className="flex flex-col gap-[30px]"
    >
      <TextInput
        id="email"
        label="Email"
        register={register("email")}
        error={errors.email}
      />

      <ButtonSubmit label="Gửi mã OTP" />
    </form>
  );
};
