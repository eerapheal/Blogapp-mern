import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContentPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
useEffect(() => {
  fetch(`http://localhost:4000/post/${id}`).then((response) => {
    response.json().then((postInfo) => {
      setPostInfo(postInfo);
    });
  });
}, [id]);

  return <div>ContentPage</div>;
};

export default ContentPage;
