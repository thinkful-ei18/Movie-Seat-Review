import axios from 'axios';
import { FETCH_REVIEW } from './types';

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const submitReview = () => async dispatch => {
//   const res = await axios.post('/api/reviews');
//   dispatch({ type: SUBMIT_REVIEW });
// };

export const fetchReview = () => dispatch => {
  const res = axios
    .get('/api/reviews')
    .then(() => dispatch({ type: FETCH_REVIEW }));
};
