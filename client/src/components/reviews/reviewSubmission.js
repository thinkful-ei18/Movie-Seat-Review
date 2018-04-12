import React from 'react';
import { connect } from 'react-redux';
import { submitReview } from '../../actions/index';
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      summary: '',
      rating: '',
      image: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const review = {
      productName: this.state.productName,
      summary: this.state.summary,
      rating: this.state.rating,
      image: this.state.image,
    };
    this.props.submitReview(review);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Product Name</label> <br />
          <input name="productName" type="text" onChange={this.onChange} />
        </div>
        <div>
          <label>Summary</label> <br />
          <textarea name="summary" type="textarea" onChange={this.onChange} />
        </div>
        <div>
          <label>Rating</label>
          <br />
          <div>
            <select name="rating" onChange={this.onChange}>
              <option />
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>
          </div>
        </div>
        <div>
          <br />
          <label>Image Url</label> <br />
          <input name="image" type="text" onChange={this.onChange} />
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form.item,
});

export default connect(mapStateToProps, { submitReview })(ReviewForm);
