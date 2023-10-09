import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import TreadingNews from "./Components/TreadingNews/TreadingNews";
import Technology from "./Components/Technology/Technology";
import Health from "./Components/Health/Health";
import Lifestyle from "./Components/Lifestyle/Lifestyle";
import Gramarlly from "./Components/Gramarlly/Gramarlly";
import CreatePost from "./Components/CreatePost/CreatePost";
import ContentPage from "./Components/ContentPage/ContentPage";
import Sport from "./Components/Sport/Sport";
import Footer from './Components/Footer/Footer'
import EditPost from './Components/EditPost/EditPost'
const Root = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/health" element={<Health />} />
        <Route path="/treadingnews" element={<TreadingNews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gramarlly" element={<Gramarlly />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/post/:id" element={<ContentPage />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/editPost/:id" element={<EditPost />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default Root;
