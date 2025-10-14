/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { pathAdmin } from "@/config/path";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tourFormSchema, type TourFormInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormSelect } from "@/components/form/FormSelect";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { FormInputGroup } from "@/components/form/FormInputGroup";
import { FormEditor } from "@/components/form/FormEditor";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { CheckboxGroup } from "@/components/checkbox/CheckboxGroup";
import { useCheckboxGroup } from "@/hooks/useCheckboxGroup";
import { TourSchedules } from "./components/TourSchedules";

const City = [
  { id: "1", label: "Hà Nội" },
  { id: "2", label: "Hồ Chí Minh" },
  { id: "3", label: "Đà Nẵng" },
];

export const TourCreate = () => {
  const informationRef = useRef<any>(null);
  const [avatars, setAvatars] = useState<any[]>([]);
  const [schedules, setSchedules] = useState([{ title: "", description: "" }]);
  const { checkedItems, handleCheckboxChange } = useCheckboxGroup();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TourFormInputs>({
    resolver: zodResolver(tourFormSchema),
    defaultValues: {
      priceAdult: "",
      priceChildren: "",
      priceBaby: "",
      priceNewAdult: "",
      priceNewChildren: "",
      priceNewBaby: "",
    },
  });

  const handleTourForm: SubmitHandler<TourFormInputs> = (data) => {
    data.avatar = null;
    if (avatars.length > 0) {
      data.avatar = avatars[0].file;
    }
    data.information = "";
    if (informationRef.current) {
      data.information = informationRef.current?.getContent() || "";
    }

    console.log(data);
    console.log(checkedItems);
    console.log(schedules);
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
            isRequired
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

          <FormFileUpload
            name="avatar"
            label="Ảnh đại diện"
            files={avatars}
            setFiles={setAvatars}
          />

          <FormInputGroup
            title="Giá cũ"
            items={[
              { id: "priceAdult", label: "Người lớn" },
              { id: "priceChildren", label: "Trẻ em" },
              { id: "priceBaby", label: "Em bé" },
            ]}
            register={register}
            control={control}
            isPrice
          />

          <FormInputGroup
            title="Giá mới"
            items={[
              { id: "priceNewAdult", label: "Người lớn" },
              { id: "priceNewChildren", label: "Trẻ em" },
              { id: "priceNewBaby", label: "Em bé" },
            ]}
            register={register}
            control={control}
            isPrice
          />

          <FormInputGroup
            title="Còn lại"
            items={[
              { id: "stockAdult", label: "Người lớn" },
              { id: "stockChildren", label: "Trẻ em" },
              { id: "stockBaby", label: "Em bé" },
            ]}
            register={register}
            control={control}
            type="number"
          />

          <div>
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Những địa điểm có tour
            </label>
            <div className="border-four bg-three flex h-[166px] flex-col gap-2 overflow-y-auto rounded-sm border px-[23px] py-[14px]">
              {City.map((item) => (
                <CheckboxGroup
                  key={item.id}
                  label={item.label}
                  value={item.id}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
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

          <FormSelect
            id="feature"
            label="Nổi bật"
            register={register("feature")}
            error={errors.feature}
            options={[
              { value: "false", label: "Không" },
              { value: "true", label: "Nổi bật" },
            ]}
          />

          <FormEditor
            editorRef={informationRef}
            id="information"
            label="Thông tin tour"
          />

          <TourSchedules setSchedules={setSchedules} />

          <ButtonSubmit />
        </form>
        <ContextLink text="Quay lại danh sách" to={`/${pathAdmin}/tour/list`} />
      </div>
    </>
  );
};
