import React from 'react';

export function reviewSubmission(props) {
  return (
    <form>
      <div>Review Theatre</div>
      <div>
        <input type="text">Summary</input>
      </div>
      <div>
        <select type="text">
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>
    </form>
  );
}
