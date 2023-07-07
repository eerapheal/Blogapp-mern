import React from "react";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import TreadingNews from './Components/TreadingNews/TreadingNews'
import Technology from './Components/Technology/Technology'
import Health from './Components/Health/Health'
import Lifestyle from './Components/Lifestyle/Lifestyle'
import Gramarlly from './Components/Gramarlly/Gramarlly'
import Create from './Components/Create/Create'
// import userContextProvider from './userContext'


const Root = () => {
  return (
// {/* <userContextProvider> */}
    <Router>
      <header>
        <Header />
      </header>

<Routes>
          <Route path="/" element={<Post />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/health" element={<Health />} />
          <Route path="/treadingnews" element={<TreadingNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/gramarlly" element={<Gramarlly />} />
          <Route path="/create" element={<Create />} />
        </Routes>
           </Router>
// </userContextProvider>

  );
};

export default Root;
