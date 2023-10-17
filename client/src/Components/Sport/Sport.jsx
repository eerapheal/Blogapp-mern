import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./Sport.css";

const Sport = ({ _id, title, summary, cover, content, createdAt, author }) => {
  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === "string" && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  const [sportPosts, setSportPosts] = useState([]);

  useEffect(() => {
    // Fetch posts in the "Sport" category from your backend
    fetch("https://santmagazine.onrender.com/sport", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setSportPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching sport posts:", error);
      });
  }, []);

  return (
    <div style={{ padding: "75px 25px 30px" }}>
      <h1 className="sportHeader">Sport</h1>
      <ul className="sportdiv">
        {sportPosts.map((post) => (
          <li key={post._id} className="sportCard">
            <div className="sportImgDiv">
              <Link to={`/post/${post._id}`}>
                <img
                  className="imgsport"
                  src={`https://santmagazine.onrender.com/${post.cover}`}
                  alt="cover"
                />
              </Link>
            </div>
            <div className="sportContent">
              <Link to={`/post/${post._id}`}>
                <h2 className="sportTittle">{post.title}</h2>
                <p className="sportSummary">{post.summary}</p>
                <p className="sportauthor">
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

export default Sport;
