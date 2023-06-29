import React from "react";
import ralph from "../../Assets/images/ralph.jpg";
import docas from "../../Assets/images/docas.jpg";
import chiyerem from "../../Assets/images/chiyerem.jpg";

const Post = () => {
  return (
    <div className="post">
      <div className="mainPost">
      <div className="imgpost">
        <img src={ralph} alt="ralph" />
        </div>
        <div className="pst">
          <h2 className="postTitle">
            “Pitch Yourself”
          </h2>
          <p  className="info">
            <a className="author">Ralph </a>
            <time>29-06-2023 10:45</time>
          </p>
          <p className="postParagh">
            “Hello Dave, I'd like to help you with your app idea. I'll build
            your app as per your requirements and help you achieve your
            development goals.
          </p>
        </div>
      </div>
      <div className="mainPost">
      <div className="imgpost">
        <img src={docas} alt="docas" />
        </div>
        <div className="pst">
          <h2 className="postTitle">
               “Pitch Yourself”
          </h2>
          <p  className="info">
            <a className="author">Docas</a>
            <time>29-06-2023 10:45</time>
          </p>
          <p className="postParagh">
            “Hello Dave, I'd like to help you with your app idea. I'll build
            your app as per your requirements and help you achieve your
            development goals.
          </p>
        </div>
      </div>
      <div className="mainPost">
      <div className="imgpost">
        <img src={chiyerem} alt="chiyerem" />
        </div>
        <div className="pst">
          <h2 className="postTitle">
          “Pitch Yourself”
          </h2>
          <p  className="info">
            <a className="author"> Chiyerem Erue </a>
            <time>29-06-2023 10:45</time>
          </p>
          <p className="postParagh">
            “Hello Dave, I'd like to help you with your app idea. I'll build
            your app as per your requirements and help you achieve your
            development goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
