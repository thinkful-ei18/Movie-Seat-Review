import { combineReducers } from 'redux';
// import authReducer from './authReducer';
import * as actions from '../actions';
import { reducer as formReducer } from 'redux-form';
import reviewReducer from './reviewReducer';

export default combineReducers({
  form: formReducer,
  reviews: reviewReducer,
});
