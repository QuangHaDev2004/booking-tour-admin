/* eslint-disable @typescript-eslint/no-explicit-any */
import "../../libs/filepondConfig";
import { FilePond } from "react-filepond";

type FormFileUploadProps = {
  name: string;
  label: string;
  files: any;
  setFiles: any;
  allowMultiple?: boolean;
  oneCol?: boolean;
};

export const FormFileUpload = ({
  name,
  label,
  files,
  setFiles,
  allowMultiple = false,
  oneCol,
}: FormFileUploadProps) => {
  return (
    <div className={`col-span-1 ${oneCol ? "" : "md:col-span-2"}`}>
      <label
        htmlFor={name}
        className="text-label mb-[10px] block text-sm font-semibold"
      >
        {label}
      </label>
      <FilePond
        name={name}
        allowMultiple={allowMultiple}
        allowRemove={true}
        labelIdle="+"
        acceptedFileTypes={["image/*"]}
        className="inner-upload-image"
        files={files}
        onupdatefiles={setFiles}
      />
    </div>
  );
};
