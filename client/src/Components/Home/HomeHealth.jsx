import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import './Health.css'

const HomeHealth = ({ _id, title, summary, cover, content, createdAt, author }) => {
  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === "string" && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  const [healthPosts, setHealthPosts] = useState([]);

  useEffect(() => {
    // Fetch posts in the "health" category from your backend
    fetch("http://localhost:4000/health", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setHealthPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching health posts:", error);
      });
  }, []);

  return (
    <div style={{ padding: "75px 15px 0" }}>
      <h1 className="healthHeader">Health Posts</h1>
      <ul className="mainHeath">
        {healthPosts.map((post) => (
          <li key={post._id} className="card">
            <Link to={`/post/${post._id}`}>
              <img
                className="image"
                src={`http://localhost:4000/${post.cover}`}
                alt="cover"
              />
            </Link>
            <div className="card__info">
              <Link to={`/post/${post._id}`}>
                <h4 className="title">{post.title}</h4>
                <p className="content">{post.summary}</p>
                <p className="healthauthor">
                  {author && <span className="author">{author.username}</span>}{" "}
                  <time>{formatISO9075(date)}</time>
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeHealth;