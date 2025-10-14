import { EditorMCE } from "../editor/EditorMCE";

type FormEditorProps = {
  id: string;
  label: string;
  editorRef: React.RefObject<null>;
};

export const FormEditor = ({ id, label, editorRef }: FormEditorProps) => {
  return (
    <div className="col-span-1 md:col-span-2">
      <label
        htmlFor={id}
        className="text-label mb-[10px] block text-sm font-semibold"
      >
        {label}
      </label>
      <EditorMCE editorRef={editorRef} id={id} />
    </div>
  );
};
