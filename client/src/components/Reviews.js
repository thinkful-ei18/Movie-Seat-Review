import React, { Component } from 'react';

export default function Reviews(props) {
  //   this.state = {
  //     reviews: [],
  //   };
  // componentDidMount() {
  //   fetch('/api/reviews')
  //     .then(results => results.json())
  //     .then(data => {
  //       data.map(review => {
  //         this.setState({ reviews: [...this.state.reviews, review] });
  //       });
  //     });
  // }

  const imgStyle = {
    height: '15%',
    width: '15%',
  };
  console.log(props.review);
  const reviews = props.reviews.map((review, index) => {
    return (
      <li key={index}>
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{review.productName}</span>
                <img style={imgStyle} alt="product" src={review.image} />
                <p>Rating: {review.rating} out of 5</p>
                <p>{review.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return <ul>{reviews}</ul>;
}
