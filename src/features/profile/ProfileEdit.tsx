/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { profileEditSchema, type ProfileEditInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";
import { useProfileDetail } from "./hooks/useProfileDetail";
import { useProfileEdit } from "./hooks/useProfileEdit";

export const ProfileEdit = () => {
  const [avatars, setAvatars] = useState<any[]>([]);
  const { profileDetail } = useProfileDetail();
  const { mutate: mutateProfileEdit, isPending: isPendingProfileEdit } =
    useProfileEdit();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileEditInputs>({
    resolver: zodResolver(profileEditSchema),
  });

  useEffect(() => {
    if (!profileDetail) return;

    if (profileDetail) {
      reset({
        ...profileDetail,
      });
    }

    if (profileDetail && profileDetail.avatar) {
      setAvatars([{ source: profileDetail.avatar }]);
    }
  }, [profileDetail, reset]);

  const handleProfileEditForm: SubmitHandler<ProfileEditInputs> = (data) => {
    data.avatar = null;
    if (avatars.length > 0 && avatars[0].file instanceof File) {
      data.avatar = avatars[0].file;
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("avatar", data.avatar);

    mutateProfileEdit(formData);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Thông tin cá nhân" />
        <ContextLink
          text="Đổi mật khẩu"
          to={`/${pathAdmin}/profile/change-password`}
        />
      </div>
      <div className="border-travel-secondary/20 overflow-hidden rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSubmit(handleProfileEditForm)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <FormInput
            id="fullName"
            label="Họ tên"
            register={register("fullName")}
            error={errors.fullName}
            isRequired
          />

          <FormInput
            id="email"
            label="Email"
            register={register("email")}
            error={errors.email}
            isRequired
          />

          <FormInput
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            error={errors.phone}
            isRequired
          />

          <FormInput
            id="positionCompany"
            label="Chức vụ"
            readOnly
            defaultValue={profileDetail?.positionCompany}
          />

          <FormInput
            id="role"
            label="Nhóm quyền"
            readOnly
            defaultValue={profileDetail?.roleName}
          />

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <ButtonSubmit text="Cập nhật" isPending={isPendingProfileEdit} />
        </form>
      </div>
    </>
  );
};
