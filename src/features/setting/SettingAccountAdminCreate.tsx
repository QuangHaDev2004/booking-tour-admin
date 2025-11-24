/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { accountAdminSchema, type AccountAdminInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";

export const SettingAccountAdminCreate = () => {
  const [avatars, setAvatars] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountAdminInputs>({
    resolver: zodResolver(accountAdminSchema),
  });

  const handleWebsiteInfoForm: SubmitHandler<AccountAdminInputs> = (data) => {
    data.avatar = null;
    if (avatars.length > 0) {
      data.avatar = avatars[0].file;
    }

    console.log(data);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Tạo tài khoản quản trị" />
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/setting/account-admin/list`}
        />
      </div>
      <div className="border-travel-secondary/20 overflow-hidden rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSubmit(handleWebsiteInfoForm)}
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

          <FormSelect
            id="role"
            label="Nhóm quyền"
            register={register("role")}
            error={errors.role}
            options={[
              { value: "1", label: "q1" },
              { value: "2", label: "q2" },
            ]}
          />

          <FormInput
            id="positionCompany"
            label="Chức vụ"
            register={register("positionCompany")}
            error={errors.positionCompany}
            isRequired
          />

          <FormSelect
            id="status"
            label="Trạng thái"
            register={register("status")}
            error={errors.status}
            options={[
              { value: "active", label: "Hoạt động" },
              { value: "inactive", label: "Tạm dừng" },
            ]}
          />

          <FormInput
            id="password"
            label="Mật khẩu"
            register={register("password")}
            error={errors.password}
            isRequired
          />

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <ButtonSubmit />
        </form>
      </div>
    </>
  );
};
