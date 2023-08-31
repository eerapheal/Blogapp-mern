import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import Ads from '../Ads/Ads'
import "./Home.css";
import NewsList from '../NewsList/NewsList';
import HomeHealth from './HomeHealth'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className='contanier'>
      <Ads />
      <h1 className="topic">SANT EXCLUSIVE</h1>
      <div className="HeadlineWraper featured">
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post._id}
              _id={post._id}
              cover={post.cover}
              summary={post.summary}
              title={post.title}
              content={post.content}
              author={post.author}
              // className='featured'
            />
          ))}
      </div>
      <NewsList />
      <HomeHealth />
    </div>
  );
};

export default Home;
