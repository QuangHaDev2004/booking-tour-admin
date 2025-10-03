import { FilePond } from "react-filepond";
import { Controller, type Control, type FieldPath } from "react-hook-form";
import type { CategoryFormInputs } from "../../types";

type FormFileUploadProps = {
  id: FieldPath<CategoryFormInputs>;
  label: string;
  control: Control<CategoryFormInputs>;
};

export const FormFileUpload = ({ id, label, control }: FormFileUploadProps) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <label
        htmlFor={id}
        className="text-label mb-[10px] block text-sm font-semibold"
      >
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value } }) => (
          <FilePond
            files={value}
            onupdatefiles={onChange}
            id={id}
            allowRemove={true}
            acceptedFileTypes={["image/*"]}
            labelIdle="+"
            className="inner-upload-image"
          />
        )}
      />
    </div>
  );
};
