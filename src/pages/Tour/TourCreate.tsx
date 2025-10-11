import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { FormInput } from "../../components/form/FormInput";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { tourFormSchema, type TourFormInputs } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmit } from "../../components/button/ButtonSubmit";
import { FormSelect } from "../../components/form/FormSelect";
import { FormFileUpload } from "../../components/form/FormFileUpload";
import { FormInputGroup } from "../../components/form/FormInputGroup";
import { CustomCheckbox } from "../../components/checkbox/Checkbox";
import { useRef, useState } from "react";
import { pathAdmin } from "../../config/path";
import { FormEditor } from "../../components/form/FormEditor";
import { EditorMCE } from "../../components/editor/EditorMCE";
import { ContextLink } from "../../components/common/ContextLink";
import {
  FaChevronDown,
  FaRegTrashCan,
  FaUpDownLeftRight,
} from "react-icons/fa6";

export const TourCreate = () => {
  const [checked, setChecked] = useState(false);
  const editorRef = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TourFormInputs>({
    resolver: zodResolver(tourFormSchema),
  });

  const handleTourForm: SubmitHandler<TourFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle title="Tạo tour" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleTourForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="name"
            label="Tên tour"
            register={register("name")}
            error={errors.name}
          />

          <FormSelect
            id="category"
            label="Danh mục"
            register={register("category")}
            error={errors.category}
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
            options={[
              { value: "active", label: "Hoạt động" },
              { value: "inactive", label: "Tạm dừng" },
            ]}
          />

          <FormFileUpload id="avatar" label="Ảnh đại diện" control={control} />

          <FormInputGroup
            title="Giá cũ"
            items={[
              { id: "priceAdult", label: "Người lớn" },
              { id: "priceChildren", label: "Trẻ em" },
              { id: "priceBaby", label: "Em bé" },
            ]}
            register={register}
          />

          <FormInputGroup
            title="Giá mới"
            items={[
              { id: "priceNewAdult", label: "Người lớn" },
              { id: "priceNewChildren", label: "Trẻ em" },
              { id: "priceNewBaby", label: "Em bé" },
            ]}
            register={register}
          />

          <FormInputGroup
            title="Còn lại"
            items={[
              { id: "stockAdult", label: "Người lớn" },
              { id: "stockChildren", label: "Trẻ em" },
              { id: "stockBaby", label: "Em bé" },
            ]}
            register={register}
          />

          <div>
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Những địa điểm có tour
            </label>
            <div className="border-four bg-three flex h-[166px] flex-col gap-2 overflow-y-auto rounded-sm border px-[23px] py-[14px]">
              <div className="flex items-center gap-[14px]">
                <CustomCheckbox checked={checked} setChecked={setChecked} />
                <label
                  className="text-secondary text-sm font-medium"
                  onClick={() => setChecked(!checked)}
                >
                  Hà Nội
                </label>
              </div>
              <div className="flex items-center gap-[14px]">
                <CustomCheckbox checked={checked} setChecked={setChecked} />
                <label
                  className="text-secondary text-sm font-medium"
                  onClick={() => setChecked(!checked)}
                >
                  Đà Nẵng
                </label>
              </div>
              <div className="flex items-center gap-[14px]">
                <CustomCheckbox checked={checked} setChecked={setChecked} />
                <label
                  className="text-secondary text-sm font-medium"
                  onClick={() => setChecked(!checked)}
                >
                  Hồ Chí Minh
                </label>
              </div>
            </div>
          </div>

          <FormInput
            id="time"
            label="Thời gian"
            register={register("time")}
            error={errors.time}
            placeholder="Ví dụ: 3 ngày 2 đêm"
          />

          <FormInput
            id="Phương tiện"
            label="Phương tiện"
            register={register("vehicle")}
            error={errors.vehicle}
            placeholder="Ví dụ: Ô tô 45 chỗ"
          />

          <FormInput
            id="departureDate"
            label="Ngày khởi hành"
            register={register("departureDate")}
            error={errors.departureDate}
            type="date"
          />

          <FormEditor
            id="information"
            label="Thông tin tour"
            control={control}
          />

          <div className="col-span-1 md:col-span-2">
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Lịch trình tour
            </label>
            <div className="border-four rounded-sm border bg-white p-5">
              <div className="mb-[15px] flex flex-wrap items-center gap-[15px]">
                <div className="bg-three border-four flex h-[52px] w-[52px] cursor-move items-center justify-center rounded-sm border">
                  <FaUpDownLeftRight className="text-[18px] text-[#A6A6A6]" />
                </div>
                <input
                  type="text"
                  {...register("schedules.0.title")}
                  className="border-four text-secondary bg-three order-1 h-[52px] w-full flex-none rounded-sm border px-[18px] text-sm font-medium sm:order-none sm:flex-1"
                />
                <div className="bg-three border-four flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-sm border">
                  <FaRegTrashCan className="text-[18px] text-[#EF3826]" />
                </div>
                <div className="bg-three border-four flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-sm border">
                  <FaChevronDown className="text-[18px] text-[#A6A6A6]" />
                </div>
              </div>
              <div className="">
                <Controller
                  control={control}
                  name="schedules.0.description"
                  render={({ field: { value } }) => (
                    <EditorMCE
                      editorRef={editorRef}
                      id="description"
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-four/90 text-secondary mt-[15px] block h-10 cursor-pointer rounded-sm px-5 py-[10px] text-sm font-bold"
            >
              + Thêm lich trình
            </button>
          </div>

          <ButtonSubmit />
        </form>
        <ContextLink text="Quay lại danh sách" to={`/${pathAdmin}/tour/list`} />
      </div>
    </>
  );
};
