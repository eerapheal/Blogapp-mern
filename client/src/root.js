import React from "react";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Root = () => {
  return (

    <Router>
      <header>
        <Header />
      </header>


     <Routes>
          <Route path="/" element={<Post />} />
        </Routes>
           </Router>

  );
};

export default Root;
