import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { roleSchema, type RoleInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { permissionList } from "@/constants/permissions";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRoleDetail } from "./hooks/useRoleDetail";
import { useRoleEdit } from "./hooks/useRoleEdit";

export const SettingRoleEdit = () => {
  const { id } = useParams();
  const [permissions, setPermissions] = useState<string[]>([]);
  const { roleDetail } = useRoleDetail({ id: id! });
  const { mutate: mutateRoleEdit, isPending: isPendingRoleEdit } = useRoleEdit({
    id: id!,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleInputs>({
    resolver: zodResolver(roleSchema),
  });

  useEffect(() => {
    if (roleDetail) {
      reset({
        ...roleDetail,
      });
    }

    if (roleDetail.permissions && roleDetail.permissions.length > 0) {
      setPermissions(roleDetail.permissions);
    }
  }, [reset, roleDetail]);

  const handlePermission = (value: string) => {
    setPermissions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleRoleForm: SubmitHandler<RoleInputs> = (data) => {
    const dataFinal = {
      ...data,
      permissions,
    };

    mutateRoleEdit(dataFinal);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Chỉnh sửa nhóm quyền" />
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/setting/role/list`}
        />
      </div>
      <div className="border-travel-secondary/20 overflow-hidden rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSubmit(handleRoleForm)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <FormInput
            id="name"
            label="Tên nhóm quyền"
            register={register("name")}
            error={errors.name}
            isRequired
          />

          <FormInput
            id="description"
            label="Mô tả ngắn"
            register={register("description")}
            error={errors.description}
          />

          <div>
            <label className="text-travel-label mb-1 block text-sm font-semibold">
              Phân quyền
            </label>
            <div className="border-travel-four bg-travel-three flex h-[166px] flex-col gap-2 overflow-y-auto rounded-sm border p-5">
              {permissionList.map((item) => (
                <label
                  key={item.value}
                  className="label text-travel-secondary flex items-center gap-3 text-sm font-medium"
                >
                  <input
                    checked={permissions.includes(item.value)}
                    onChange={() => handlePermission(item.value)}
                    type="checkbox"
                    className="checkbox checkbox-primary border-travel-secondary/20 hover:border-travel-primary h-5 w-5 rounded-md"
                    value={item.value}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <ButtonSubmit text="Cập nhật" isPending={isPendingRoleEdit} />
        </form>
      </div>
    </>
  );
};
