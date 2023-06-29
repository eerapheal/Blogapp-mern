import React from "react";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";

const Root = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Post />
      </main>
    </body>
  );
};

export default Root;
