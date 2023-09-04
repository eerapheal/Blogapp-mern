import React from "react";
import Post from "../Post/Post";
import Ads from "../Ads/Ads";
import "./Home.css";
import NewsList from "../NewsList/NewsList";

const Home = () => {
  return (
    <div className="contanier">
      <Ads />
      <h1 className="topic">SANT EXCLUSIVE</h1>
      <div className=""></div>
      <Post />
      <NewsList />
    </div>
  );
};

export default Home;
