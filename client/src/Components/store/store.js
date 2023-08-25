
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import newsReducer from '../../Redux/NewsReducer';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
