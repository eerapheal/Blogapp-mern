import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],

    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
  ],
};

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "indent",
  "size",
  "header",
  "link",
  "image",
  "video",
  "color",
  "background",
  "clean",
];

const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");


  const makePost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set('file', files[0]);
    const response = await fetch("http://localhost:4000/create", {
      method: "POST",
      body: data,
    });
    console.log(await response.json())
 
  };

  return (
    <main>
      <form onSubmit={makePost}>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" 
        // value={files}
        // name="files"
        onChange={(ev) => setFiles(ev.target.files)} />
        <ReactQuill
        placeholder={" Write Your Content Here"}
          value={content}
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
          formats={formats}
          style={{
            // maxWidth: "650px",
            // minWidth: '650px',
            // height: "200px",
            backgroundColor: "#fff",
            backgroundSize: 'cover',
            // color: "#fff", 
            marginBottom: '8px',
            // @media all and (min-width: 768px) {}
          }}
        />
        <button className="submit" type="submit">Create post</button>
      </form>
    </main>
  );
};

export default Create;
