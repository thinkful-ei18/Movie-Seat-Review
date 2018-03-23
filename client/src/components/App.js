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
class App extends React.Component {
  componentWillMount() {
    this.props.fetchReview();
  }

  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Home} />
            <Route
              exact={true}
              path="/"
              component={Reviews}
              reviews={this.props.fetchReviews}
            />
            <Route
              path="/reviews"
              component={ReviewForm}
              onSubmit={value =>
                this.props.dispatch(actions.submitReview(value))
              }
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
