import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { otpPasswordSchema, type otpPasswordInputs } from "@/types";
import { TextInput } from "../inputs/TextInput";
import { ButtonSubmit } from "../buttons/ButtonSubmit";

export const FormOtpPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<otpPasswordInputs>({
    resolver: zodResolver(otpPasswordSchema),
  });

  const handleOtpPasswordForm: SubmitHandler<otpPasswordInputs> = (data) => {
    const dataFinal = {
      ...data,
    };
    console.log(dataFinal);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOtpPasswordForm)}
      className="flex flex-col gap-[30px]"
    >
      <TextInput
        id="otp"
        label="Mã OTP"
        register={register("otp")}
        error={errors.otp}
      />

      <ButtonSubmit label="Xác thực" />
    </form>
  );
};
