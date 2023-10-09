import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = (value, onChange) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill 
    value={value}
    theme={'snow'}
    onChange={onchange}
    modules={modules}
    />
  )
};

export default Editor;
