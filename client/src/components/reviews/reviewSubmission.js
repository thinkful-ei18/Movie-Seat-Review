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

const ReviewForm = () => {
  return (
    <form>
      <div>
        <label>Location</label> <br />
        <Field name="location" component="input" type="text" />
      </div>
      <div>
        <label>Summary</label> <br />
        <Field name="summary" component="textarea" />
      </div>
      <div>
        <label>Overall Rating</label>
        <br />
        <div>
          <Field name="overallRating" component="select">
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
        <label>Screen Rating</label>
        <br />
        <div>
          <Field name="screenRating" component="select">
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
        <label>Legroom Rating</label>
        <br />
        <div>
          <Field name="legroomRating" component="select">
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
        <label>Comfort Rating</label>
        <br />
        <div>
          <Field name="comfortRating" component="select">
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'review',
})(ReviewForm);
