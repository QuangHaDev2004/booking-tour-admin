import { useForm, type SubmitHandler } from "react-hook-form";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { templateSchema, type TemplateInputs } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmit } from "../../components/common/ButtonSubmit";
import { FormSelect } from "../../components/form/FormSelect";

export const Template = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TemplateInputs>({
    resolver: zodResolver(templateSchema),
  });

  const handleTemplateForm: SubmitHandler<TemplateInputs> = (data) => {
    const dataFinal = { ...data };

    console.log(dataFinal);
  };

  return (
    <>
      <PageTitle title="Thiết lập giao diện" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleTemplateForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormSelect
            id="dataSection4"
            label="Dữ liệu Section 4"
            register={register("dataSection4")}
            error={errors.dataSection4}
            options={[
              { label: "pt1", value: "1" },
              { label: "pt2", value: "2" },
            ]}
          />

          <FormSelect
            id="dataSection6"
            label="Dữ liệu Section 6"
            register={register("dataSection6")}
            error={errors.dataSection6}
            options={[
              { label: "tt1", value: "1" },
              { label: "tt2", value: "2" },
            ]}
          />

          <ButtonSubmit text="Cập nhật" />
        </form>
      </div>
    </>
  );
};
