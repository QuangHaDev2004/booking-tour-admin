import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Link } from "react-router";
import { pathAdmin } from "../../constants/path";
import { registerPlugin } from "react-filepond";
import { useForm, type SubmitHandler } from "react-hook-form";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryFormSchema, type CategoryFormInputs } from "../../types";
import { FormInput } from "../../components/form/FormInput";
import { FormSelect } from "../../components/form/FormSelect";
import { FormFileUpload } from "../../components/form/FormFileUpload";
import { FormEditor } from "../../components/form/FormEditor";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

export const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CategoryFormInputs>({
    resolver: zodResolver(categoryFormSchema),
  });

  const handleCategoryForm: SubmitHandler<CategoryFormInputs> = (data) => {
    console.log(data);
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
            register={register("position")}
            error={errors.position}
            placeholder="Note: Tự động tăng"
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

          <FormFileUpload id="avatar" label="Ảnh đại diện" control={control} />

          <FormEditor id="description" label="Mô tả" control={control} />

          <div className="col-span-1 text-center md:col-span-2">
            <button className="bg-primary hover:bg-primary/90 h-[56px] w-[275px] cursor-pointer rounded-xl text-[18px] font-bold text-white">
              Tạo mới
            </button>
          </div>
        </form>
        <Link
          to={`/${pathAdmin}/category/list`}
          className="text-primary mt-[30px] flex justify-center text-[18px] font-bold underline"
        >
          Quay lại danh sách
        </Link>
      </div>
    </>
  );
};
