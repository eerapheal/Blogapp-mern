import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./CreatePost.css";
import Editor from "../EditPost/Editor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    // Fetch the list of categories from your server when the component mounts
    fetch("http://localhost:4000/categories", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setCategory(data[0]._id); // Set the default category to the first category in the list
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const makePost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    data.set("categoryId", category);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="createHeader">
      <form onSubmit={makePost}>
        <input
          type="text"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          calssName="createHeader"
          type="summary"
          maxlength="130"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <select
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />

        <Editor value={content}
          onChange={(ev) => setContent(ev.target.value)}
        />
        <button className="submit" type="submit">
          Create post
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
