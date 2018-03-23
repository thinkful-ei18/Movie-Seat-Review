import axios from 'axios';

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';

export const submitReview = () => dispatch => {
  axios.post('/api/reviews').then(() => dispatch({ type: SUBMIT_REVIEW }));
};

export const FETCH_REVIEW = 'FETCH_REVIEW';
export const fetchReview = () => dispatch => {
  axios.get('/api/reviews').then(() => dispatch({ type: FETCH_REVIEW }));
};
