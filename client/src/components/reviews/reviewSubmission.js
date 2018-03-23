import React from 'react';
import { reduxForm, Field } from 'redux-form';
const validate = values => {
  const errors = {};
  if (!values.location) {
    errors.location = 'Required';
  }
  if (!values.overallRating) {
    errors.overallRating = 'Required';
  }
  return errors;
};

export class ReviewForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    return fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers.get('content-type').startsWith('application/json')
        ) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText,
        });
      }
      return;
    });
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div>
          <label>Product Name</label> <br />
          <Field name="productName" component="input" type="text" />
        </div>
        <div>
          <label>Summary</label> <br />
          <Field name="summary" component="textarea" />
        </div>
        <div>
          <label>Rating</label>
          <br />
          <div>
            <Field name="rating" component="select">
              <option />
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </Field>
          </div>
        </div>
        <div>
          <br />
          <label>Image Url</label> <br />
          <Field name="image" component="input" type="text" />
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'review',
})(ReviewForm);
