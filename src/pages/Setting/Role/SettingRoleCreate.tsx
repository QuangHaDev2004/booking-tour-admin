import { useForm, type SubmitHandler } from "react-hook-form";
import { PageTitle } from "../../../components/pageTitle/PageTitle";
import { roleSchema, type RoleInputs } from "../../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../../../components/form/FormInput";
import { ButtonSubmit } from "../../../components/common/ButtonSubmit";
import { BackToList } from "../../../components/common/BackToList";
import { pathAdmin } from "../../../config/path";
import { CheckboxGroup } from "../../../components/common/checkbox/CheckboxGroup";
import { permissionList } from "../../../config/permissions";
import { useState } from "react";

export const SettingRoleCreate = () => {
  const [permissions, setPermissions] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleInputs>({
    resolver: zodResolver(roleSchema),
  });

  const handleChangePermission = (value: string, checked: boolean) => {
    setPermissions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  const handleRoleForm: SubmitHandler<RoleInputs> = (data) => {
    const dataFinal = {
      ...data,
      permissions,
    };
    console.log(dataFinal);
  };

  return (
    <>
      <PageTitle title="Tạo nhóm quyền" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleRoleForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="name"
            label="Tên nhóm quyền"
            register={register("name")}
            error={errors.name}
          />

          <FormInput
            id="description"
            label="Mô tả ngắn"
            register={register("description")}
            error={errors.description}
          />

          <div>
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Phân quyền
            </label>
            <div className="bg-three border-four flex h-[166px] flex-col gap-2 overflow-y-auto rounded-sm border px-[23px] py-[14px]">
              {permissionList.map((item) => (
                <CheckboxGroup
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  handleChange={handleChangePermission}
                />
              ))}
            </div>
          </div>

          <ButtonSubmit />
        </form>
        <BackToList to={`/${pathAdmin}/setting/role/list`} />
      </div>
    </>
  );
};
