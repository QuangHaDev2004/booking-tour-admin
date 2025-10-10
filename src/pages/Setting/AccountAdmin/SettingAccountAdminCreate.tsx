/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { ContextLink } from "../../../components/common/ContextLink";
import { ButtonSubmit } from "../../../components/common/ButtonSubmit";
import { PageTitle } from "../../../components/pageTitle/PageTitle";
import { pathAdmin } from "../../../config/path";
import { FormInput } from "../../../components/form/FormInput";
import { accountAdminSchema, type AccountAdminInputs } from "../../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFileUpload } from "../../../components/form/FormFileUpload";
import { useState } from "react";
import { FormSelect } from "../../../components/form/FormSelect";

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
    let avatar = null;
    if (avatars.length > 0) {
      avatar = avatars[0].file;
    }

    console.log(avatar);
    console.log(data);
  };

  return (
    <>
      <PageTitle title="Tạo tài khoản quản trị" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleWebsiteInfoForm)}
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
          />

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <ButtonSubmit />
        </form>
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/category/list`}
        />
      </div>
    </>
  );
};
