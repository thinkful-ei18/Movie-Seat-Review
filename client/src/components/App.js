import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
export default function App(props) {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Reviews} />
          <Route path="/reviews" component={ReviewForm} />
        </div>
      </BrowserRouter>
    </div>
  );
}

// const mapStateToProps = state => ({
//   review: state.review,
// });

// const mapDispatchToProps = dispatch => ({
//   submitReview: value => dispatch(actions.submitReview(value)),
//   fetchReview: () => dispatch(actions.fetchReview()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
