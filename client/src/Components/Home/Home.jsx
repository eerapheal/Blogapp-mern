import React from "react";
import PostList from "../Post/Post";
import Ads from '../Ads/Ads'
import "./Home.css";
import NewsList from '../NewsList/NewsList';
import HomeHealth from './HomeHealth'

const Home = () => {
  return (
    <div className='contanier'>
      <Ads />
      <h1 className="topic">SANT EXCLUSIVE</h1>
      <div className="HeadlineWraper featured">
     
      </div>
      <PostList />
      <NewsList />
      <HomeHealth />
    </div>
  );
};

export default Home;
