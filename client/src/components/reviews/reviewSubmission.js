import React from 'react';

export default class ReviewForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onSubmit) {
      const newReview = {
        productName: this.productName,
        summary: this.summary,
        rating: this.rating,
        image: this.image,
      };
      this.props.onSubmit(newReview);
    }
    this.productName = '';
    this.summary = '';
    this.rating = '';
    this.image = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <div>
          <label>Product Name</label> <br />
          <input
            ref={productName => (this.productName = this.productName)}
            type="text"
          />
        </div>
        <div>
          <label>Summary</label> <br />
          <input ref={summary => (this.summary = summary)} type="textarea" />
        </div>
        <div>
          <label>Rating</label>
          <br />
          <div>
            <input ref={rating => (this.rating = rating)} type="select">
              <option />
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </input>
          </div>
        </div>
        <div>
          <br />
          <label>Image Url</label> <br />
          <input ref={image => (this.image = image)} type="text" />
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
