import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';
import ReviewForm from './reviews/reviewSubmission';
import Reviews from './Reviews';

// connect(store => {
//   return {
//     review: store.review,
//     reviews: store.reviews,
//     fetched: store.fetched,
//   };
// });
export function App(props) {
  const onSubmit = fields => {
    console.log(fields);
  };
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/"
            component={Reviews}
            reviews={props.dispatch(actions.fetchReview())}
          />
          <Route
            path="/reviews"
            component={ReviewForm}
            onSubmit={value => props.dispatch(actions.submitReview(value))}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export const mapStateToProps = state => ({
  review: state.review,
});

export default connect(mapStateToProps)(App);
