/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { websiteInfoSchema, type WebsiteInfoInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";

export const SettingWebsiteInfo = () => {
  const [logos, setLogos] = useState<any[]>([]);
  const [favicons, setFavicons] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WebsiteInfoInputs>({
    resolver: zodResolver(websiteInfoSchema),
  });

  const handleWebsiteInfoForm: SubmitHandler<WebsiteInfoInputs> = (data) => {
    data.logo = null;
    if (logos.length > 0) {
      data.logo = logos[0].file;
    }

    data.favicon = null;
    if (favicons.length > 0) {
      data.favicon = favicons[0].file;
    }

    const formData = new FormData();
    formData.append("websiteName", data.websiteName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address || "");
    formData.append("logo", data.logo);
    formData.append("favicon", data.favicon);

    console.log(Array.from(formData.entries()));
  };

  return (
    <>
      <PageTitle title="Thông tin website" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleWebsiteInfoForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="websiteName"
            label="Tên website"
            register={register("websiteName")}
            error={errors.websiteName}
            isRequired
          />

          <FormInput
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            error={errors.phone}
          />

          <FormInput
            id="email"
            label="Email"
            register={register("email")}
            error={errors.email}
          />

          <FormInput
            id="address"
            label="Địa chỉ"
            register={register("address")}
            error={errors.address}
          />

          <FormFileUpload
            name="logo"
            label="Logo"
            files={logos}
            setFiles={setLogos}
            oneCol
          />

          <FormFileUpload
            name="favicon"
            label="Favicon"
            files={favicons}
            setFiles={setFavicons}
            oneCol
          />

          <ButtonSubmit text="Cập nhật" />
        </form>
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/setting/list`}
        />
      </div>
    </>
  );
};
