/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react"

export const EditorMCE = ({ editorRef, value = "", id = "" }: { editorRef: any, value?: string, id?: string }) => {
  return (
    <Editor
      apiKey={import.meta.env.VITE_API_TINYMCE}
      onInit={(_evt, editor) => editorRef.current = editor}
      initialValue={value}
      init={{
        height: 500,
        menu: {
          favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
        },
        menubar: 'favs file edit view insert format tools table help',
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        images_upload_url: ""
      }}
      id={id}
    />
  )

}