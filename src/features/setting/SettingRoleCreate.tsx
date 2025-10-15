import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckboxGroup } from "@/hooks/useCheckboxGroup";
import { roleSchema, type RoleInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { permissionList } from "@/constants/permissions";
import { CheckboxGroup } from "@/components/checkbox/CheckboxGroup";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";

export const SettingRoleCreate = () => {
  const { checkedItems, handleCheckboxChange } = useCheckboxGroup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleInputs>({
    resolver: zodResolver(roleSchema),
  });

  const handleRoleForm: SubmitHandler<RoleInputs> = (data) => {
    const dataFinal = {
      ...data,
      checkedItems,
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
            isRequired
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
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>

          <ButtonSubmit />
        </form>
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/setting/role/list`}
        />
      </div>
    </>
  );
};
