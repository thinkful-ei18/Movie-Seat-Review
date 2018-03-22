import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentDidMount() {
    fetch('/api/reviews')
      .then(results => results.json())
      .then(data => {
        data.map(review => {
          this.setState({ reviews: [...this.state.reviews, review] });
        });
      });
  }

  render() {
    let reviews = this.state.reviews.map(review => {
      return (
        <li>
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{review.location}</span>
                  <ul>
                    <li>{review.overallRating}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return <ul>{reviews}</ul>;
  }
}

export default Reviews;
