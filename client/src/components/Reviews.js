import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentWillMount() {
    fetch('/api/reviews').then();
  }
  render() {
    const reviewItems = this.state.reviews.map(review => (
      <div key={review.id} />
    ));
    return (
      <div>
        <h1>Reviews</h1>
      </div>
    );
  }
}

export default Reviews;
