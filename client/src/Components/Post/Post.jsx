import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./Post.css";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Move the fetch call to a separate useEffect to avoid infinite rendering
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/post");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setPosts(data);
          }
        } else {
          console.error("Error fetching posts:", response.status);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === "string" && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id} className="pst">
            <div className="postCard stack">
              <Link to={`/post/${post._id}`}>
                <img
                  className="imgpost"
                  src={`http://localhost:4000/${post.cover}`}
                  alt="cover"
                />
              </Link>
              <div className="postContent">
                <h2 className="postTitle">{post.title}</h2>
                <p className="postParagh">{post.summary}</p>
                <p className="info">
                  {post.author && (
                    <span className="author">{post.author.username}</span>
                  )}
                  {" "}
                  <time>{formatISO9075(date)}</time>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
