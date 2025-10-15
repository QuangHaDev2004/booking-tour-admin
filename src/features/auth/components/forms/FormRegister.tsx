import { registerSchema, type RegisterInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Checkbox, Field, Label } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { TextInput } from "../inputs/TextInput";
import { PasswordInput } from "../inputs/PasswordInput";
import { ButtonSubmit } from "../buttons/ButtonSubmit";

export const FormRegister = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      agree: false,
    },
  });

  const handleRegisterForm: SubmitHandler<RegisterInputs> = (data) => {
    const dataFinal = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    console.log(dataFinal);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegisterForm)}
      className="flex flex-col gap-[30px]"
    >
      <TextInput
        id="fullName"
        label="Họ tên"
        register={register("fullName")}
        error={errors.fullName}
      />

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

      <div>
        <Controller
          control={control}
          name="agree"
          render={({ field: { value, onChange } }) => (
            <Field className="text-secondary/60 flex items-center gap-4 text-lg font-semibold">
              <Checkbox
                checked={value}
                onChange={(checked) => onChange(checked)}
                className="group data-checked:bg-primary data-checked:border-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-[#D5D5D5] bg-white focus-visible:outline-none data-focus:outline-none"
              >
                <FaCheck className="hidden size-3 fill-white group-data-checked:block" />
              </Checkbox>
              <Label className="flex-1">
                Tôi chấp nhận các điều khoản và điều kiện
              </Label>
            </Field>
          )}
        />
        {errors.agree && (
          <p className="text-error mt-1 text-xs font-semibold">
            {errors.agree.message}
          </p>
        )}
      </div>

      <ButtonSubmit label="Đăng ký" />
    </form>
  );
};
