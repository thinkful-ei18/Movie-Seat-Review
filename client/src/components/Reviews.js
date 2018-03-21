import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentWillMount() {
    fetch('/api/reviews')
      .then(results => results.json())
      .then(data => {
        let reviews = data.results.map(review => {
          return <div key={review.id}>{review}</div>;
        });
        this.setState({ reviews: reviews });
      });
  }

  render() {
    return <div>{this.state.reviews}</div>;
  }
}

export default Reviews;
