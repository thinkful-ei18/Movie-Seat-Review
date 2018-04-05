import axios from 'axios';

// export const fetchUser = () => async dispatch => {
//   const res = await axios.get('/api/current_user');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';
export const submitReview = submitData => dispatch => {
  console.log('post action called');
  fetch('api/reviews', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(submitData),
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SUBMIT_REVIEW,
        payload: data,
      })
    );
};

export const FETCH_REVIEW = 'FETCH_REVIEW';
export const fetchReview = () => dispatch => {
  console.log('Fetching');
  fetch('/api/reviews')
    .then(res => res.json())
    .then(reviews =>
      dispatch({
        type: FETCH_REVIEW,
        payload: reviews,
      })
    );
};
