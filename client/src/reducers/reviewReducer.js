import { SUBMIT_REVIEW, FETCH_REVIEW } from '../actions/index';
import { combineReducers, createStore, applyMiddleware } from 'redux';
// import authReducer from './authReducer';
import thunk from 'redux-thunk';

const initialState = {
  fetching: false,
  fetched: false,
  reviews: [],
  review: [],
};

const reducers = combineReducers({
  form: formsReducer,
  review: reviewsReducer,
});

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REVIEW: {
      state = { ...state, review: action.payload };
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};
const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEW: {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        review: action.payload,
      };
      break;
    }
    default: {
      return state;
    }
  }
};

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
