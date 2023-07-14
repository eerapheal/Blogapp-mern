import React from "react";
import { formatISO9075 } from 'date-fns';

const Post = ({ title, summary, cover, content, createdAt, author }) => {
  let date = new Date(); // Initialize with a default value

  // Check if createdAt is a valid date string
  if (typeof createdAt === 'string' && !isNaN(Date.parse(createdAt))) {
    date = new Date(createdAt);
  } else if (createdAt instanceof Date) {
    date = createdAt;
  }

  return (
    <main>
      <div className="post">
        <div className="mainPost">
        <div className="imgpost">
            <img src={'http://localhost:4000/'+cover} alt="cover" /> 
          </div>
          <div className="pst">
            <h2 className="postTitle">{title}</h2>
            <p className="info">
              {author && <span className="author">{author.username}</span>}
              {' '}
              <time>{formatISO9075(date)}</time>
            </p>
            <p className="postParagh">{summary}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
