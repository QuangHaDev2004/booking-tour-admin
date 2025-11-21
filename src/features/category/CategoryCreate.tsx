/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryFormSchema, type CategoryFormInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { FormEditor } from "@/components/form/FormEditor";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createCategoryService } from "@/services/category";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { useGetCategories } from "@/hooks/useGetCategories";
import { renderOptions } from "@/utils/RenderOptions";

export const CategoryCreate = () => {
  const editorRef = useRef<any>(null);
  const [avatars, setAvatars] = useState<any[]>([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: zodResolver(categoryFormSchema),
  });

  const { categoryList } = useGetCategories();
  console.log(categoryList);

  const { mutate, isPending } = useMutation({
    mutationFn: createCategoryService,
    onSuccess: (data) => {
      reset();
      toast.success(data.message);
    },
    onError: (errors: AxiosError<{ message: string }>) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  const handleCategoryForm: SubmitHandler<CategoryFormInputs> = (data) => {
    data.avatar = null;
    if (avatars.length > 0 && avatars[0].file instanceof File) {
      data.avatar = avatars[0].file;
    }

    data.description = "";
    if (editorRef.current) {
      data.description = editorRef.current.getContent();
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("parent", data.parent || "");
    formData.append("position", data.position || "");
    formData.append("status", data.status || "");
    formData.append("avatar", data.avatar);
    formData.append("description", data.description || "");

    mutate(formData);
  };

  return (
    <>
      <PageTitle title="Tạo danh mục" />
      <div className="border-travel-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
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

          <div>
            <label
              htmlFor="parent"
              className="text-travel-label mb-[10px] block text-sm font-semibold"
            >
              Danh mục cha
            </label>
            <select
              {...register("parent")}
              className="select bg-travel-three text-travel-secondary h-[52px] w-full px-[22px] text-sm font-medium"
            >
              <option value="">-- Chọn danh mục --</option>
              {renderOptions(categoryList)}
            </select>
          </div>

          <FormInput
            id="position"
            label="Vị trí"
            type="number"
            register={register("position")}
            error={errors.position}
            placeholder="Note: Tự động tăng"
          />

          <div>
            <label
              htmlFor="status"
              className="text-travel-label mb-[10px] block text-sm font-semibold"
            >
              Trạng thái
            </label>
            <select
              {...register("status")}
              className="select bg-travel-three text-travel-secondary h-[52px] w-full px-[22px] text-sm font-medium"
            >
              <option value="active">Hoạt động</option>
              <option value="inactive">Tạm dừng</option>
            </select>
          </div>

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <FormEditor editorRef={editorRef} id="description" label="Mô tả" />

          <ButtonSubmit isPending={isPending} />
        </form>
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/category/list`}
        />
      </div>
    </>
  );
};
