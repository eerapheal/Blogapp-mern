import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
// import './Post.css'

const LifeStyle = ({ _id, title, summary, cover, content, createdAt, author }) => {
  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === "string" && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  const [lifeStylePosts, setLifeStylePosts] = useState([]);

  useEffect(() => {
    // Fetch posts in the "lifeStyle" category from your backend
    fetch("http://localhost:4000/lifeStyle", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setLifeStylePosts(data);
      })
      .catch((error) => {
        console.error("Error fetching lifeStyle posts:", error);
      });
  }, []);

  return (
    <div style={{ padding: "75px" }}>
      <h1 className="lifeStyleHeader">LifeStyle Posts</h1>
      <ul>
        {lifeStylePosts.map((post) => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>
              <img
                className="imglifeStyle"
                src={`http://localhost:4000/${post.cover}`}
                alt="cover"
              />
            </Link>
            <div>
              <Link to={`/post/${post._id}`}>
                <h2 className="lifeStyleTittle">{post.title}</h2>
                <p>{post.summary}</p>
                <p className="lifeStyleauthor">
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

export default LifeStyle;
