import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./Technology.css";

const Technology = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === "string" && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  const [technologyPosts, setTechnologyPosts] = useState([]);

  useEffect(() => {
    // Fetch posts in the "technology" category from your backend
    fetch("https://santmagazine.onrender.com/technologies", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setTechnologyPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching technology posts:", error);
      });
  }, []);

  return (
    <div style={{ padding: "75px 25px 30px" }}>
      <h1 className="technologyHeader">Technology Posts</h1>
      <ul className="mainTech">
        {technologyPosts.map((post) => (
          <li className="techCard" key={post._id}>
            <Link to={`/post/${post._id}`}>
              <img
                className="imgtechnology"
                src={`https://santmagazine.onrender.com/${post.cover}`}
                alt="cover"
              />
            </Link>
            <div className="card__info">
              <Link to={`/post/${post._id}`}>
                <h2 className="technologyTittle">{post.title}</h2>
                <p className="techSummary">{post.summary}</p>
                <p className="technologyauthor">
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

export default Technology;
