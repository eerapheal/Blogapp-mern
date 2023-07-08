import React from "react";
import Root from "./root";
import {UserContextProvider} from './UserContext'
const App = () => {
  return (
    <UserContextProvider>
    
    <Root />
  </UserContextProvider>);

};

export default App;
