import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post._id}
            cover={post.cover}
            summary={post.summary}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
    </>
  );
};

export default Home;
