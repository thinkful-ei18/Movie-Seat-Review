import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';
import ReviewForm from './reviews/reviewSubmission';
import Reviews from './Reviews';

class App extends React.Component {
  componentDidMount() {
    // this.props.fetchUser();
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
              path="/reviews"
              component={ReviewForm}
              onSubmit={this.onSubmit()}
            />
            <Route path="/reviews" component={Reviews} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
