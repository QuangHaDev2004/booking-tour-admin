/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../components/form/FormInput";
import { FormFileUpload } from "../../components/form/FormFileUpload";
import { ButtonSubmit } from "../../components/button/ButtonSubmit";
import { pathAdmin } from "../../config/path";
import { ContextLink } from "../../components/common/ContextLink";
import { useState } from "react";
import { profileEditSchema, type ProfileEditInputs } from "../../types";

export const ProfileEdit = () => {
  const [avatars, setAvatars] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileEditInputs>({
    resolver: zodResolver(profileEditSchema),
  });

  const handleProfileEditForm: SubmitHandler<ProfileEditInputs> = (data) => {
    let avatar = null;
    if (avatars.length > 0) {
      avatar = avatars[0].file;
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("avatar", avatar);

    console.log(data);
  };

  return (
    <>
      <PageTitle title="Thông tin cá nhân" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleProfileEditForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="fullName"
            label="Họ tên"
            register={register("fullName")}
            error={errors.fullName}
          />

          <FormInput
            id="email"
            label="Email"
            register={register("email")}
            error={errors.email}
          />

          <FormInput
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            error={errors.phone}
          />

          <FormInput id="positionCompany" label="Chức vụ" readOnly />

          <FormInput id="role" label="Nhóm quyền" readOnly />

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <ButtonSubmit text="Cập nhật" />
        </form>
        <ContextLink
          text="Đổi mật khẩu"
          to={`/${pathAdmin}/profile/change-password`}
        />
      </div>
    </>
  );
};
