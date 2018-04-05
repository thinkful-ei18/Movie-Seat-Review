import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../actions/index';
class Reviews extends Component {
  componentWillMount() {
    this.props.fetchReview();
  }
  render() {
    const imgStyle = {
      height: '15%',
      width: '15%',
    };
    const reviewArray = this.props.reviews.data;
    console.log(reviewArray);
    const reviews = this.props.reviews.map(review => {
      return (
        <li key={review.id}>
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
}

// Reviews.propTypes = {
//   fetchReview: propTypes.func.isRequired,
//   reviews: propTypes.array.isRequired,
// };
const mapStateToProps = state => ({
  reviews: state.reviews.items,
});

export default connect(mapStateToProps, { fetchReview })(Reviews);
