/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../libs/filepondConfig";
import { FilePond } from "react-filepond";
import { Controller, type Control, type FieldPath } from "react-hook-form";

type FormFileUploadProps = {
  id: FieldPath<any>;
  label: string;
  control: Control<any>;
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
            onupdatefiles={(fileItems) =>
              onChange(fileItems.map((f) => f.file))
            }
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
