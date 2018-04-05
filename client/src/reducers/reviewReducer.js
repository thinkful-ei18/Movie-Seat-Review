import { SUBMIT_REVIEW, FETCH_REVIEW } from '../actions/index';
import { combineReducers, createStore, applyMiddleware } from 'redux';
// import authReducer from './authReducer';
import thunk from 'redux-thunk';

const initialState = {
  items: [],
  item: {},
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REVIEW: {
      state = { ...state, item: action.payload };
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEW:
      console.log('reducer fetching');
      return {
        ...state,
        items: action.payload,
      };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  form: formsReducer,
  reviews: reviewsReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
