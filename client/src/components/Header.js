// import 'materialize-css/dist/css/materialize.min.css';
import './main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <li>
  //           <a href="/auth/google">Login</a>
  //         </li>
  //       );

  //     default:
  //       return (
  //         <li>
  //           <a href="/api/logout">Log Out</a>
  //         </li>
  //       );
  //   }
  // }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Product Reviewer
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="reviews">Submit Review</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

export default connect()(Header);
