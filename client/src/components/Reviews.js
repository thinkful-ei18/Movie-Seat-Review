import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../actions/index';
class Reviews extends Component {
  componentWillMount() {
    this.props.fetchReview();
  }
  render() {
    const imgStyle = {
      height: '40%',
      width: 'auto',
    };
    const reviewArray = this.props.reviews.data;
    console.log(reviewArray);
    const reviews = this.props.reviews.map(review => {
      return (
        <li key={review.id}>
          <div className="card">
            <span className="card-title">{review.productName}</span>
            <img style={imgStyle} alt="product" src={review.image} />
            <p>Rating: {review.rating} out of 5</p>
            <p>{review.summary}</p>
          </div>
        </li>
      );
    });
    return <ul>{reviews}</ul>;
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.items,
});

export default connect(mapStateToProps, { fetchReview })(Reviews);
