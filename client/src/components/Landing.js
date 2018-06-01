import React, { Component } from 'react';

class Landing extends Component {
	render() {
		let divStyle = {
			'text-align': 'center',
			position: 'relative',
			height: '400px',
			width: '500px',
		};
		return (
			<div style={divStyle} className="landing-container" onSubmit={this.onSubmit}>
				<div class="landing-center">
					<h4>Welcome to Product Reviewer</h4>
					<h4>To join do either of the following</h4>
					<ol>
						<li>Submit a Review by clicking the button</li>
						<li>or</li>
						<li>Read other reviews on the site</li>
					</ol>
					<a class="started" href="/landing">
						Get Started
					</a>
				</div>
			</div>
		);
	}
}

export default Landing;
