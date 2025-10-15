import { registerSchema, type RegisterInputs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "./inputs/TextInput";
import { PasswordInput } from "./inputs/PasswordInput";
import { ButtonSubmit } from "./buttons/ButtonSubmit";
import { Checkbox, Field, Label } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export const FormRegister = () => {
  const [agree, setAgree] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  });

  const handleAgreeChange = (checked: boolean) => {
    setAgree(checked);
  };

  const handleRegisterForm: SubmitHandler<RegisterInputs> = (data) => {
    const dataFinal = {
      ...data,
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

      <Field className="text-secondary/60 flex items-center gap-4 text-lg font-semibold">
        <Checkbox
          checked={agree}
          onChange={(checked) => handleAgreeChange(checked)}
          className="group data-checked:bg-primary data-checked:border-primary flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border border-[#D5D5D5] bg-white focus-visible:outline-none data-focus:outline-none"
        >
          <FaCheck className="hidden size-3 fill-white group-data-checked:block" />
        </Checkbox>
        <Label className="flex-1">
          Tôi chấp nhận các điều khoản và điều kiện
        </Label>
      </Field>

      <ButtonSubmit label="Đăng ký" disabled={!agree} />
    </form>
  );
};
