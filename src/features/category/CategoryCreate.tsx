/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryFormSchema, type CategoryFormInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { FormEditor } from "@/components/form/FormEditor";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";
import { useRef, useState } from "react";
import { actionOptions } from "@/constants/actionOptions";

export const CategoryCreate = () => {
  const editorRef = useRef<any>(null);
  const [avatars, setAvatars] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: zodResolver(categoryFormSchema),
  });

  const handleCategoryForm: SubmitHandler<CategoryFormInputs> = (data) => {
    let avatar = null;
    if (avatars.length > 0) {
      avatar = avatars[0].file;
    }
    data.description = editorRef.current?.getContent() || "";

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("parent", data.parent || "");
    formData.append("position", data.position || "");
    formData.append("status", data.status || "");
    formData.append("avatar", avatar);
    formData.append("description", data.description || "");

    // console.log(data);
    // console.log(avatar);
    console.log("Final: ", Object.fromEntries(formData.entries()));
  };

  return (
    <>
      <PageTitle title="Tạo danh mục" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleCategoryForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="name"
            label="Tên danh mục"
            register={register("name")}
            error={errors.name}
            isRequired
          />

          <FormSelect
            id="parent"
            label="Danh mục cha"
            register={register("parent")}
            error={errors.parent}
            options={[
              { value: "", label: "-- Chọn danh mục --" },
              { value: "v1", label: "Danh mục 1" },
              { value: "v2", label: "Danh mục 2" },
            ]}
          />

          <FormInput
            id="position"
            label="Vị trí"
            type="number"
            register={register("position")}
            error={errors.position}
            placeholder="Note: Tự động tăng"
          />

          <FormSelect
            id="status"
            label="Trạng thái"
            register={register("status")}
            error={errors.status}
            options={[actionOptions.active, actionOptions.inactive]}
          />

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <FormEditor editorRef={editorRef} id="description" label="Mô tả" />

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
