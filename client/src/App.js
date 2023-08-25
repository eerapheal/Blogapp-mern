import React from "react";
import Root from "./root";
import { Provider } from 'react-redux';
import store from './Components/store/store';

import {UserContextProvider} from './UserContext'
const App = () => {
  return (
    <Provider store={store}>
    <UserContextProvider>
    
    <Root />
  </UserContextProvider>
  </Provider>
  );
};

export default App;
