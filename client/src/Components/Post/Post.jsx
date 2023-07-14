import React from "react";
import { formatISO9075 } from 'date-fns';

const Post = ({ title, summary, cover, content, createdAt, author }) => {
  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);

  return (
    <main>
      <div className="post">
        <div className="mainPost">
          <div className="imgpost">
            <img src={cover} alt="cover" />
          </div>
          <div className="pst">
            <h2 className="postTitle">{title}</h2>
            <p className="info">
              <a className="author">{author}</a>
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
