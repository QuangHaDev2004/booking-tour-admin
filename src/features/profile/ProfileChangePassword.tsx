import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import {
  profileChangePasswordSchema,
  type ProfileChangePasswordInputs,
} from "@/types";

export const ProfileChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileChangePasswordInputs>({
    resolver: zodResolver(profileChangePasswordSchema),
  });

  const handleProfileChangePasswordForm: SubmitHandler<
    ProfileChangePasswordInputs
  > = (data) => {
    const dataFinal = {
      password: data.password,
    };
    console.log(dataFinal);
  };

  return (
    <>
      <PageTitle title="Đổi mật khẩu" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleProfileChangePasswordForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="password"
            label="Mật khẩu"
            register={register("password")}
            error={errors.password}
            isRequired
          />

          <FormInput
            id="confirmPassword"
            label="Nhập lại mật khẩu mới"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
            isRequired
          />

          <ButtonSubmit text="Đổi mật khẩu" />
        </form>
      </div>
    </>
  );
};
