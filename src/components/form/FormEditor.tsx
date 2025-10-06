/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, type Control, type FieldPath } from "react-hook-form";
import { EditorMCE } from "../editor/EditorMCE";
import { useRef } from "react";

type FormEditorProps = {
  id: FieldPath<any>;
  label: string;
  control: Control<any>;
};

export const FormEditor = ({ id, label, control }: FormEditorProps) => {
  const editorRef = useRef(null);

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
          <EditorMCE editorRef={editorRef} id={id} value={value} />
        )}
      />
    </div>
  );
};
