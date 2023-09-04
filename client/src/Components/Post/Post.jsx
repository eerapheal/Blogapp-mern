import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./Post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10); // Number of posts to initially display

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

  const loadMorePosts = () => {
    // Increase the number of visible posts based on the device type
    setVisiblePosts((prevVisiblePosts) =>
      window.innerWidth < 2000 ? prevVisiblePosts + 12 : prevVisiblePosts + 40
    );
  };

  let date = new Date(); // Initialize with a default value

  return (
    <div>
      <div className="postContanier">
        {posts.length > 0 &&
          posts.slice(0, visiblePosts).map((post) => {
            // Date handling as in the original code
            if (
              typeof post.createdAt === "string" &&
              !isNaN(Date.parse(post.createdAt))
            ) {
              date = new Date(post.createdAt);
            } else if (post.createdAt instanceof Date) {
              date = post.createdAt;
            }

            return (
              <div className="HeadlineWraper">
                <div key={post._id}>
                  <div className=" postCard stack">
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
                        )}{" "}
                        <time>{formatISO9075(date)}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {visiblePosts < posts.length && (
        <button onClick={loadMorePosts}>View More</button>
      )}
    </div>
  );
};

export default Post;
