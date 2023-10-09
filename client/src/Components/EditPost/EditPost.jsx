import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false); // Changed to false

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
        setFiles(postInfo.files);
      });
    });
  }, [id]); // Include 'id' in the dependency array

  const updatePost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set('id', id)
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    const response = await fetch("http://localhost:4000/post/", {
      method: "PUT",
      body: data,
      credentials: 'include',
    });
    if (response.ok){
    setRedirect(true)
  };
  };

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <main className="createHeader">
      <form onSubmit={updatePost}>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          className="createHeader" // Fixed the typo here
          type="text" // Changed to 'text'
          maxLength={130} // Fixed attribute name
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />

        <Editor
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default EditPost;
