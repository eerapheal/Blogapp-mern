import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from 'date-fns';
import './Post.css'
const Post = ({_id, title, summary, cover, content, createdAt, author }) => {
  let date = new Date(); // Initialize with a default value

  if (typeof createdAt === 'string' && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  return (
    <main>
      <div className="pst">
        
      <div className="postCard stack ">
            <Link to={`/post/${_id}`}>
              <img className="imgpost" src={`http://localhost:4000/${cover}`} alt="cover" />
            </Link>
          <div className="postContent">
            <h2 className="postTitle">{title}</h2>
            <p className="postParagh">{summary}</p>
            <p className="info">
              {author && <span className="author">{author.username}</span>}
              {' '} 
              <time>{formatISO9075(date)}</time>
            </p>
          </div>
        </div>   
      </div>
    </main>
  );
};

export default Post;
