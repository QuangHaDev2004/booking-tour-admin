/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { websiteInfoSchema, type WebsiteInfoInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormFileUpload } from "@/components/form/FormFileUpload";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { pathAdmin } from "@/config/path";
import { useWebsiteInfoEdit } from "./hooks/useWebsiteInfoEdit";
import { useWebsiteInfoDetail } from "./hooks/useWebsiteInfoDetail";

export const SettingWebsiteInfo = () => {
  const { mutate: mutateWebsiteInfoEdit, isPending: isPendingWebsiteInfoEdit } =
    useWebsiteInfoEdit();
  const { websiteInfoDetail } = useWebsiteInfoDetail();

  const [logos, setLogos] = useState<any[]>([]);
  const [favicons, setFavicons] = useState<any[]>([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<WebsiteInfoInputs>({
    resolver: zodResolver(websiteInfoSchema),
  });

  useEffect(() => {
    if (websiteInfoDetail) {
      reset({
        ...websiteInfoDetail,
      });
    }

    if (websiteInfoDetail && websiteInfoDetail.logo) {
      setLogos([
        {
          source: websiteInfoDetail.logo,
        },
      ]);
    }

    if (websiteInfoDetail && websiteInfoDetail.favicon) {
      setFavicons([
        {
          source: websiteInfoDetail.favicon,
        },
      ]);
    }
  }, [reset, websiteInfoDetail]);

  const handleWebsiteInfoForm: SubmitHandler<WebsiteInfoInputs> = (data) => {
    data.logo = null;
    if (logos.length > 0 && logos[0].file instanceof File) {
      data.logo = logos[0].file;
    }

    data.favicon = null;
    if (favicons.length > 0 && favicons[0].file instanceof File) {
      data.favicon = favicons[0].file;
    }

    const formData = new FormData();
    formData.append("websiteName", data.websiteName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address || "");
    formData.append("facebook", data.facebook || "");
    formData.append("zalo", data.zalo || "");
    formData.append("logo", data.logo);
    formData.append("favicon", data.favicon);

    mutateWebsiteInfoEdit(formData);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <PageTitle title="Thông tin website" />
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/setting/list`}
        />
      </div>
      <div className="border-travel-secondary/20 overflow-hidden rounded-md border bg-white p-6 shadow-md">
        <form
          onSubmit={handleSubmit(handleWebsiteInfoForm)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
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

          <FormInput
            id="facebook"
            label="Link Facebook"
            register={register("facebook")}
            error={errors.facebook}
          />

          <FormInput
            id="zalo"
            label="Link Zalo"
            register={register("zalo")}
            error={errors.zalo}
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

          <ButtonSubmit text="Cập nhật" isPending={isPendingWebsiteInfoEdit} />
        </form>
      </div>
    </>
  );
};
