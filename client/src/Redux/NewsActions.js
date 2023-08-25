import axios from 'axios';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0fbacbf0b2dd41ca8b63e31afa55d40c')
      .then((response) => {
        dispatch(fetchNewsSuccess(response.data.articles));
      })
      .catch((error) => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};
