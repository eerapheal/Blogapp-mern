import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ContentPage.css";
const ContentPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((postInfo) => {
        setPostInfo(postInfo);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, [id]);

  if (!postInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainContent">
      <div className="mainContents">
        <div className="contentimg">
          <img  className="contentimg" src={`http://localhost:4000/${postInfo.cover}`} alt="cover" />
        </div>
        <div className="pst">
          <h2 className="postContentTitle">{postInfo.title}</h2>

          <p className="postSummay">{postInfo.summary}</p>
          <p className="postcontentParagh">{postInfo.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
