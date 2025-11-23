/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react";

export const EditorMCEController = ({
  editorRef,
  value,
  id = "",
  onChange
}: {
  editorRef: any;
  value: string;
  id?: string;
  onChange?: any
}) => {
  return (
    <Editor
      apiKey={import.meta.env.VITE_API_TINYMCE}
      onInit={(_evt, editor) => { editorRef.current = editor }}
      value={value}
      id={id}
      onEditorChange={(content) => {
        if(onChange) onChange(content);
      }}
      init={{
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: `undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help`,
        images_upload_url: "",
      }}
    />
  );
};
